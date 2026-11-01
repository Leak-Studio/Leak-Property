/* Development-only runtime checks for the exported Webflow documents. */
(() => {
  const panel = document.createElement("aside");
  panel.id = "scroll-verification";
  panel.style.cssText =
    "position:fixed;right:10px;top:90px;z-index:99999;max-width:360px;padding:12px;background:#fff;color:#111;font:12px/1.4 monospace;box-shadow:0 2px 12px #0005";
  panel.innerHTML =
    '<button type="button">Run runtime checks</button><pre role="status" style="white-space:pre-wrap;max-height:65vh;overflow:auto">Ready</pre>';
  document.body.append(panel);
  const button = panel.querySelector("button"),
    output = panel.querySelector("pre");
  const wait = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
  const frame = () => new Promise(requestAnimationFrame);
  const activate = (element) => {
    for (const type of ["mousedown", "mouseup", "click"])
      element.dispatchEvent(
        new MouseEvent(type, {
          bubbles: true,
          cancelable: true,
          button: 0,
          view: window,
        }),
      );
  };
  button.addEventListener("click", async () => {
    button.disabled = true;
    delete panel.dataset.results;
    const checks = [];
    const check = (name, pass, detail) => checks.push({ name, pass, detail });
    try {
      await document.fonts.ready;
      for (
        let attempt = 0;
        attempt < 120 &&
        document.querySelector(".preloader") &&
        !document.documentElement.classList.contains("preloader-skip");
        attempt++
      )
        await wait(100);
      check(
        "Static exported document",
        !document.querySelector("#app") &&
          !!document.querySelector("header.header"),
        "Populated HTML with original component contract",
      );
      check(
        "Webflow interaction runtime",
        document.documentElement.classList.contains("w-mod-ix"),
        document.documentElement.className,
      );
      const lenis = window.lenis;
      if (!matchMedia("(prefers-reduced-motion: reduce)").matches) {
        check("Lenis active", !!lenis && !lenis.isStopped, lenis?.className);
        if (!lenis) throw Error("Lenis did not initialize");
        check(
          "One scroll owner",
          getComputedStyle(document.documentElement).scrollBehavior === "auto",
          getComputedStyle(document.documentElement).scrollBehavior,
        );
        const drifts = [],
          runs = [];
        for (let run = 0; run < 5; run++) {
          output.textContent = `Wheel run ${run + 1}/5`;
          lenis.scrollTo(0, { immediate: true, force: true });
          await wait(300);
          for (let index = 0; index < 120; index++) {
            await frame();
            drifts.push(Math.abs(scrollY - lenis.animatedScroll));
            window.dispatchEvent(
              new WheelEvent("wheel", {
                deltaY: 12,
                bubbles: true,
                cancelable: true,
              }),
            );
          }
          await wait(1000);
          runs.push({ expected: Math.min(1440, lenis.limit), actual: scrollY });
        }
        const sorted = [...drifts].sort((a, b) => a - b);
        const p95 = sorted[Math.floor(sorted.length * 0.95)];
        check(
          "Wheel reaches requested position",
          runs.every((run) => Math.abs(run.expected - run.actual) < 3),
          JSON.stringify(runs),
        );
        check(
          "Browser follows Lenis every frame",
          p95 < 2,
          `p95 drift=${p95.toFixed(2)}px; max=${Math.max(...drifts).toFixed(2)}px`,
        );
        output.textContent = "Checking local dialog boundary";
        lenis.scrollTo(300, { immediate: true, force: true });
        activate(document.querySelector('[data-trigger="modal-form"]'));
        await wait(850);
        const dialog = document.querySelector('[data-modal="modal-form"]');
        check(
          "Project dialog opens",
          dialog.classList.contains("modal_state-open"),
          getComputedStyle(dialog.querySelector(".u-modal-wrapper")).opacity,
        );
        const position = scrollY;
        window.dispatchEvent(
          new WheelEvent("wheel", {
            deltaY: 240,
            bubbles: true,
            cancelable: true,
          }),
        );
        await wait(250);
        check(
          "Dialog locks page scroll",
          Math.abs(position - scrollY) < 1 && lenis.isStopped,
          "moved=" + (scrollY - position) + "px",
        );
        const form = dialog.querySelector("form");
        const event = new Event("submit", { bubbles: true, cancelable: true });
        const cancelled = !form.dispatchEvent(event);
        check(
          "Demo submission stays local",
          cancelled && form.closest(".w-form").dataset.demoSubmitted === "true",
          "Capturing submit boundary cancels dispatch",
        );
        const close = [...dialog.querySelectorAll("[data-close-modal]")].find(
          (element) => element.getBoundingClientRect().width,
        );
        activate(close);
        await wait(700);
        check(
          "Dialog close releases scroll",
          !dialog.classList.contains("modal_state-open") && !lenis.isStopped,
          lenis.className,
        );
      }
      check(
        "No original booking integration",
        !document.querySelector(
          'script[src*="hubspot"],script[src*="hsappstatic"],.meetings-iframe-container[data-src],iframe',
        ),
        "No external calendar destination",
      );
      check(
        "Runtime media stays local",
        [...document.images].every(
          (image) =>
            image.src.startsWith(location.origin + "/assets/") ||
            image.src.startsWith("data:"),
        ),
        "Includes images created by repeaters",
      );
      check(
        "No horizontal page overflow",
        document.documentElement.scrollWidth <=
          document.documentElement.clientWidth + 1,
        document.documentElement.scrollWidth +
          "/" +
          document.documentElement.clientWidth,
      );
      panel.dataset.results = JSON.stringify(checks);
      panel.dataset.state = checks.every((item) => item.pass) ? "pass" : "fail";
      output.textContent = checks
        .map(
          (item) =>
            `${item.pass ? "PASS" : "FAIL"} ${item.name}\n  ${item.detail}`,
        )
        .join("\n");
    } catch (error) {
      panel.dataset.state = "error";
      output.textContent = error.stack || String(error);
    } finally {
      button.disabled = false;
    }
  });
})();
