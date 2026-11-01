(() => {
  "use strict";
  const aliases = {
    top: "hero",
    komposisi: "composition",
    pendekatan: "story",
    kontak: "footer",
  };

  // This boundary runs before Webflow registers its form handlers.
  document.addEventListener(
    "submit",
    (event) => {
      const form = event.target.closest("form[data-leak-demo]");
      if (!form) return;
      event.preventDefault();
      event.stopImmediatePropagation();
      const wrapper = form.closest(".w-form");
      form.hidden = true;
      form.style.display = "none";
      const success = wrapper.querySelector(".w-form-done");
      success.style.display = "block";
      success.setAttribute("tabindex", "-1");
      success.focus({ preventScroll: true });
      wrapper.dataset.demoSubmitted = "true";
    },
    true,
  );

  document.addEventListener(
    "click",
    (event) => {
      const unavailable = event.target.closest("[data-leak-unavailable]");
      if (unavailable) event.preventDefault();
    },
    true,
  );

  document.addEventListener("DOMContentLoaded", () => {
    const reduced = matchMedia("(prefers-reduced-motion: reduce)");
    const mobile = matchMedia("(max-width: 767px)");
    let lenis;
    let tick;

    function syncScrollLock() {
      if (!lenis) return;
      const preloader = document.querySelector(".preloader");
      const preloading =
        preloader &&
        !document.documentElement.classList.contains("preloader-skip") &&
        getComputedStyle(preloader).display !== "none";
      const locked =
        preloading ||
        !!document.querySelector(".u-modal.modal_state-open") ||
        (mobile.matches && !!document.querySelector(".nav_content.w--open"));
      if (locked !== lenis.isStopped) {
        if (locked) lenis.stop();
        else lenis.start();
      }
    }

    function initializeScroll() {
      if (tick) gsap.ticker.remove(tick);
      lenis?.destroy();
      lenis = undefined;
      window.lenis = undefined;
      if (!window.Lenis || reduced.matches) {
        document.documentElement.classList.add("leak-reduced-motion");
        return;
      }
      document.documentElement.classList.remove("leak-reduced-motion");
      lenis = new Lenis({ lerp: 0.1, wheelMultiplier: 1 });
      window.lenis = lenis;
      lenis.on("scroll", ScrollTrigger.update);
      tick = (time) => lenis.raf(time * 1000);
      gsap.ticker.add(tick);
      gsap.ticker.lagSmoothing(0);
      syncScrollLock();
    }

    initializeScroll();
    reduced.addEventListener("change", initializeScroll);
    mobile.addEventListener("change", syncScrollLock);
    new MutationObserver(syncScrollLock).observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
      subtree: true,
    });

    const dialogs = [...document.querySelectorAll(".u-modal")];
    let returnFocus;
    document.querySelectorAll("[data-trigger]").forEach((trigger) => {
      if (!trigger.getAttribute("data-trigger")) return;
      trigger.addEventListener("click", () => {
        returnFocus = document.activeElement;
        requestAnimationFrame(() => {
          const dialog = dialogs.find((item) =>
            item.classList.contains("modal_state-open"),
          );
          dialog
            ?.querySelector("input,button,[data-close-modal]")
            ?.focus({ preventScroll: true });
        });
      });
    });
    dialogs.forEach((dialog) => {
      dialog.querySelectorAll("[data-close-modal]").forEach((close) => {
        close.setAttribute("role", "button");
        close.setAttribute("tabindex", "0");
        close.setAttribute("aria-label", "Tutup panel");
        close.addEventListener("click", () =>
          returnFocus?.focus({ preventScroll: true }),
        );
        close.addEventListener("keydown", (event) => {
          if (event.key === "Enter" || event.key === " ") close.click();
        });
      });
    });
    document.addEventListener("keydown", (event) => {
      if (event.key === "Escape") {
        dialogs.forEach((dialog) =>
          dialog.classList.remove("modal_state-open"),
        );
        returnFocus?.focus({ preventScroll: true });
      }
      if (event.key !== "Tab") return;
      const dialog = dialogs.find((item) =>
        item.classList.contains("modal_state-open"),
      );
      if (!dialog) return;
      const fields = [
        ...dialog.querySelectorAll(
          'input:not([type="hidden"]),textarea,button,a[href],[tabindex="0"]',
        ),
      ].filter(
        (field) => field.getBoundingClientRect().width && !field.disabled,
      );
      const first = fields[0],
        last = fields.at(-1);
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last?.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first?.focus();
      }
    });

    function resolveLegacyAnchor() {
      const key = location.hash.slice(1);
      const target = aliases[key] && document.getElementById(aliases[key]);
      if (target) {
        if (lenis) lenis.scrollTo(target, { immediate: true });
        else target.scrollIntoView({ behavior: "instant" });
      }
    }
    window.addEventListener("hashchange", resolveLegacyAnchor);
    window.addEventListener("load", resolveLegacyAnchor, { once: true });

    const readingTime = Math.max(
      1,
      Math.ceil(
        (document
          .querySelector(".content_blog-body")
          ?.textContent.trim()
          .split(/\s+/).length || 0) / 200,
      ),
    );
    document
      .querySelectorAll('[fs-readtime-element="time"]')
      .forEach((element) => (element.textContent = String(readingTime)));

    // Verification loads only in the development server's explicit comparison mode.
    document.documentElement.dataset.leakReady = "true";
  });
})();
