/* Loaded only by the local server when ?verify is present. */
(() => {
  const panel = document.createElement("aside");
  panel.id = "scroll-verification";
  panel.style.cssText =
    "position:fixed;right:8px;top:80px;z-index:1000;max-width:360px;padding:12px;background:#fff;color:#111;font:12px/1.4 monospace;box-shadow:0 2px 10px #0005";
  panel.innerHTML =
    '<button type="button">Run scroll checks</button><pre style="white-space:pre-wrap;margin:8px 0 0" role="status">Ready</pre>';
  document.body.append(panel);
  const button = panel.querySelector("button");
  const output = panel.querySelector("pre");
  const frame = () => new Promise(requestAnimationFrame);
  const wait = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

  button.addEventListener("click", async () => {
    button.disabled = true;
    delete panel.dataset.state;
    delete panel.dataset.results;
    output.textContent = "Starting scroll checks";
    const checks = [];
    const check = (name, pass, detail) => checks.push({ name, pass, detail });
    try {
      while (document.querySelector("#preloader")) await wait(100);
      await document.fonts.ready;
      await wait(300);
      const lenis = typeof lenisInstance === "undefined" ? null : lenisInstance;
      const reduced = matchMedia("(prefers-reduced-motion: reduce)").matches;
      if (!reduced && window.Lenis) {
        check("Lenis active", !!lenis && !lenis.isStopped, lenis?.className);
        if (!lenis) throw Error("Lenis did not initialize");
        const gaps = [];
        const intervals = [];
        let lastTime = 0;
        let moved = 0;
        for (let run = 0; run < 5; run++) {
          output.textContent = `Wheel run ${run + 1}/5`;
          lenis.scrollTo(0, { immediate: true });
          await wait(350);
          const start = scrollY;
          for (let i = 0; i < 120; i++) {
            const time = await frame();
            if (lastTime) intervals.push(time - lastTime);
            lastTime = time;
            panel.dataset.phase = `wheel ${run + 1}/5 frame ${i + 1}/120`;
            gaps.push(Math.abs(scrollY - lenis.animatedScroll));
            // Exercise the actual Lenis wheel handler with repeatable input.
            window.dispatchEvent(
              new WheelEvent("wheel", {
                deltaY: 12,
                bubbles: true,
                cancelable: true,
              }),
            );
          }
          await wait(800);
          lastTime = 0;
          moved += scrollY - start;
        }
        const sorted = [...gaps].sort((a, b) => a - b);
        const p95Gap = sorted[Math.floor(sorted.length * 0.95)];
        check(
          "Wheel input moves page",
          moved > 5000,
          Math.round(moved) + "px total across 5 runs",
        );
        check(
          "Browser follows Lenis every frame",
          p95Gap < 2,
          "p95 drift=" +
            p95Gap.toFixed(2) +
            "px; max=" +
            Math.max(...gaps).toFixed(2) +
            "px",
        );
        check(
          "One scroll owner",
          getComputedStyle(document.documentElement).scrollBehavior === "auto",
          getComputedStyle(document.documentElement).scrollBehavior,
        );
        if (window.ScrollTrigger) {
          const services = document.querySelector(".services");
          if (services) {
            const st = ScrollTrigger.getAll().find(
              (trigger) => trigger.trigger === services,
            );
            const bottom =
              services.getBoundingClientRect().bottom +
              scrollY -
              document.querySelector(".service-stage").offsetHeight;
            check(
              "Service animation ends with sticky section",
              !!st && Math.abs(st.end - bottom) < 2,
              st
                ? "end drift=" + (st.end - bottom).toFixed(2) + "px"
                : "missing trigger",
            );
          }
        }
        panel.dataset.samples = JSON.stringify({ gaps, intervals });
      } else {
        check("Native scroll fallback", !lenis, lenis?.className || "native");
      }
      output.textContent = "Checking visible images";
      const images = [...document.images].filter((image) => {
        const rect = image.getBoundingClientRect();
        return (
          rect.top < innerHeight &&
          rect.bottom > 0 &&
          rect.left < innerWidth &&
          rect.right > 0 &&
          rect.width > 0 &&
          rect.height > 0
        );
      });
      await Promise.race([
        Promise.all(images.map((image) => image.decode().catch(() => {}))),
        wait(3000),
      ]);
      check(
        "Visible images loaded",
        images.every((image) => image.complete && image.naturalWidth > 0),
        images.length + " visible images",
      );
      const reveals = [...document.querySelectorAll(".reveal")];
      check(
        "GSAP owns reveal transforms",
        reduced ||
          reveals.every((element) => {
            const style = getComputedStyle(element);
            const durations = style.transitionDuration
              .split(",")
              .map(parseFloat);
            return !style.transitionProperty
              .split(",")
              .some(
                (property, index) =>
                  ["transform", "all"].includes(property.trim()) &&
                  durations[index % durations.length] > 0,
              );
          }),
        "CSS must not chase GSAP transforms",
      );
      const jump = async (position) => {
        if (lenis) lenis.scrollTo(position, { immediate: true });
        else window.scrollTo({ top: position, behavior: "instant" });
        await wait(200);
      };
      const wheel = async (deltaY) => {
        window.dispatchEvent(
          new WheelEvent("wheel", { deltaY, bubbles: true, cancelable: true }),
        );
        await wait(250);
      };
      if (lenis) {
        output.textContent = "Checking modal and menu";
        await jump(300);
        document.querySelector("[data-contact]").click();
        await wait(650);
        const dialog = document.querySelector("#contactModal .modal-card");
        check(
          "Modal finishes its entrance",
          Number(getComputedStyle(dialog).opacity) > 0.99,
          "opacity=" + getComputedStyle(dialog).opacity,
        );
        const lockedPosition = scrollY;
        await wheel(240);
        check(
          "Modal holds background scroll",
          Math.abs(scrollY - lockedPosition) < 1 && lenis.isStopped,
          "background moved=" + (scrollY - lockedPosition) + "px",
        );
        document.querySelector("#modalClose").click();
        await wheel(240);
        check(
          "Modal close resumes scroll",
          scrollY > lockedPosition + 100 && !lenis.isStopped,
          "moved=" + Math.round(scrollY - lockedPosition) + "px",
        );
        await jump(0);
        document.querySelector("#menuBtn").click();
        await wait(550);
        const menuPanel = document.querySelector(".menu-panel");
        check(
          "Menu opens and remains visible",
          menuPanel.getBoundingClientRect().height > 100 &&
            getComputedStyle(document.querySelector("#menuOverlay"))
              .visibility === "visible",
          "height=" +
            Math.round(menuPanel.getBoundingClientRect().height) +
            "px",
        );
        const mobile = matchMedia("(max-width:767px)").matches;
        check(
          "Menu lock matches layout",
          lenis.isStopped === mobile,
          "mobile=" + mobile + "; stopped=" + lenis.isStopped,
        );
        document.querySelector("#menuBtn").click();
        await wheel(240);
        check(
          "Menu close resumes scroll",
          scrollY > 100 && !lenis.isStopped,
          Math.round(scrollY) + "px",
        );
      }
      if (window.ScrollTrigger && !reduced) {
        output.textContent = "Checking service scene";
        const services = document.querySelector(".services");
        const stage = document.querySelector(".service-stage");
        const trigger = ScrollTrigger.getAll().find(
          (item) => item.trigger === services,
        );
        if (trigger) {
          await jump(trigger.end);
          const last = services
            .querySelector(".service-row:last-child")
            .getBoundingClientRect();
          const stageRect = stage.getBoundingClientRect();
          check(
            "Last service panel reaches viewport",
            Math.abs(last.right - stageRect.right) < 2,
            "right edge drift=" +
              (last.right - stageRect.right).toFixed(2) +
              "px",
          );
          await jump(trigger.start + (trigger.end - trigger.start) * 0.5);
          const stageAtMiddle = stage.getBoundingClientRect();
          check(
            "Service stage stays pinned",
            Math.abs(stageAtMiddle.top) < 2,
            "top=" + stageAtMiddle.top.toFixed(2) + "px",
          );
          const track = services.querySelector(".service-track");
          check(
            "Service track visible during scroll",
            Number(getComputedStyle(track).opacity) > 0.99,
            "opacity=" + getComputedStyle(track).opacity,
          );
          await jump(trigger.start);
          check(
            "Reverse scroll restores service intro",
            Number(getComputedStyle(stage.querySelector("h2")).opacity) > 0.99,
            "opacity=" + getComputedStyle(stage.querySelector("h2")).opacity,
          );
        }
      }
      const anchor = document.querySelector('a[href="/#pendekatan"]');
      if (anchor) {
        anchor.click();
        await wait(1600);
        const top = document
          .querySelector("#pendekatan")
          .getBoundingClientRect().top;
        check(
          "Anchor arrives at target",
          Math.abs(top) < 2,
          "target offset=" + top.toFixed(2) + "px",
        );
      }
      const projectButton = document.querySelector("#nextProject");
      if (projectButton) {
        output.textContent = "Checking project controls and FAQ";
        const initialIndex =
          Number.parseInt(
            document.querySelector("#projectCount").textContent,
            10,
          ) - 1;
        const expected = properties[(initialIndex + 3) % properties.length];
        projectButton.click();
        projectButton.click();
        projectButton.click();
        await wait(1000);
        const source = document.querySelector(".showImage").src;
        check(
          "Rapid project clicks stay in sync",
          document.querySelector("#showImageLink").getAttribute("href") ===
            `/projects/${expected.slug}/` &&
            source.endsWith(`/assets/${expected.image}`) &&
            [...document.querySelectorAll(".project-echo")].every(
              (image) => image.src === source,
            ),
          document.querySelector("#projectCount").textContent,
        );
        const more = document.querySelector("#faqShow");
        more.click();
        check(
          "FAQ expands",
          [...document.querySelectorAll(".faq-more")].every(
            (item) => getComputedStyle(item).display !== "none",
          ),
          more.getAttribute("aria-expanded"),
        );
        more.click();
        check(
          "FAQ collapses",
          [...document.querySelectorAll(".faq-more")].every(
            (item) => getComputedStyle(item).display === "none",
          ),
          more.getAttribute("aria-expanded"),
        );
      }
      check(
        "No horizontal page overflow",
        document.documentElement.scrollWidth <=
          document.documentElement.clientWidth + 1,
        document.documentElement.scrollWidth +
          "/" +
          document.documentElement.clientWidth +
          "px",
      );
      panel.dataset.results = JSON.stringify(checks);
      output.textContent = checks
        .map(
          (result) =>
            `${result.pass ? "PASS" : "FAIL"} ${result.name}\n  ${result.detail ?? ""}`,
        )
        .join("\n");
      panel.dataset.state = checks.every((result) => result.pass)
        ? "pass"
        : "fail";
    } catch (error) {
      output.textContent = String(error.stack || error);
      panel.dataset.state = "error";
    } finally {
      button.disabled = false;
    }
  });
})();
