/* Development-only observer shared by pinned reference and local page fixtures. */
(() => {
  const output = document.createElement("div");
  output.id = "parity-observation";
  output.hidden = true;
  document.body.append(output);
  const wait = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
  function activate(element) {
    for (const type of ["mousedown", "mouseup", "click"])
      element.dispatchEvent(
        new MouseEvent(type, {
          bubbles: true,
          cancelable: true,
          button: 0,
          view: window,
        }),
      );
  }
  function flushStyles() {
    document
      .querySelectorAll(".nav_content,.u-modal-wrapper")
      .forEach((element) => element.getBoundingClientRect());
  }
  const common = [
    "header.header",
    ".nav_trigger",
    ".logo-link.is-main",
    "main",
    "footer#footer",
    ".footer_top",
    ".footer_bottom",
    ".footer_top-text h2",
  ];
  const families = {
    landing: [
      "section#hero",
      ".image-hero",
      ".hero-content_main",
      ".heading-hero_container-pc",
      ".content_composition",
      "section#composition",
      "section#apartment",
      "section#composed",
      ".content_approach-main",
      "section#story",
      "section#about",
      "section#trusted-by",
      "section#blog",
      "section#founder",
      "section#faq",
    ],
    projects: [
      "section#hero",
      ".content_blog-heading",
      ".projects-all_wrapper",
      ".projects-all_item",
      ".projects-all_item-header",
      ".projects-all_item-slider-wrapper",
    ],
    project: [
      ".content_project-main",
      ".content_project-main_heading",
      ".content_project-main_prefences",
      ".content_project-main_advs",
      ".content_project-main_right",
      "section#hero-vertical",
      "section#hero-horizont",
      "section#second-horizont",
      "section#second-vert",
      "section#plan",
      "section#client",
      "section#kirchen",
      "section#sticky-scroll",
      "section#gallery-vertical",
      "section#slider-second",
      "section#other",
    ],
    blog: [
      "section#hero",
      ".content_blog-heading",
      ".content_blog-grid",
      ".content_blog-item",
      ".u-blog_image",
      ".u-blog_text",
    ],
    article: [
      ".content_blog-heading.is-blog",
      ".content_blog-descr_max",
      ".content_blog-aside",
      ".content_blog-image",
      ".content_blog-body",
      ".content_blog-body > .u-rich",
      ".blogs_nex-back",
    ],
    legal: [
      ".content_docs-flex",
      ".content_docs-left",
      ".content_docs-heading",
      ".content_docs-update",
      ".content_docs-right",
      ".content_docs-right > .u-rich",
    ],
  };
  const motion = [
    ".content_composition-heading",
    ".content_composition-text",
    ".content_composition-card",
    ".content_apartments",
    ".content_apatments-back",
    ".scroll-container",
    ".scroll-container--lvl-2",
    ".content_approach-scroll-item",
    ".content_about-overlay",
    "[card-about-text]",
    ".nav_content",
    ".nav_content-inline",
    ".u-modal-wrapper",
  ];
  function kind() {
    if (document.querySelector("section#composition")) return "landing";
    if (document.querySelector(".content_project-main")) return "project";
    if (document.querySelector(".content_docs-flex")) return "legal";
    if (document.querySelector(".content_blog-body")) return "article";
    if (document.querySelector(".projects-all_wrapper")) return "projects";
    return "blog";
  }
  function measure(selector) {
    return [...document.querySelectorAll(selector)].map((element) => {
      const rect = element.getBoundingClientRect(),
        style = getComputedStyle(element);
      return {
        x: rect.x,
        y: rect.y + scrollY,
        width: rect.width,
        height: rect.height,
        font: style.fontFamily,
        size: style.fontSize,
        lineHeight: style.lineHeight,
        weight: style.fontWeight,
        transform: style.transform,
        opacity: style.opacity,
        display: style.display,
      };
    });
  }
  function snapshot(state) {
    const selectors = [...common, ...families[kind()]];
    const data = {
      path: location.pathname,
      kind: kind(),
      state,
      viewport: { width: innerWidth, height: innerHeight },
      scroll: scrollY,
      totalHeight: document.documentElement.scrollHeight,
      root: document.documentElement.className,
      geometry: Object.fromEntries(
        selectors.map((selector) => [selector, measure(selector)]),
      ),
      motion: Object.fromEntries(
        motion.map((selector) => [selector, measure(selector)]),
      ),
      fonts: [...document.fonts].map((font) => ({
        family: font.family,
        weight: font.weight,
        status: font.status,
      })),
      media: [...document.images].map((image) => ({
        src: image.getAttribute("src"),
        width: image.naturalWidth,
        height: image.naturalHeight,
      })),
      incompleteImages: [...document.images].filter(
        (image) => !image.complete || !image.naturalWidth,
      ).length,
    };
    data.components = [
      ...document.querySelectorAll("[data-wf-component-id]"),
    ].map((element) => {
      const rect = element.getBoundingClientRect(),
        style = getComputedStyle(element);
      return {
        id: element.getAttribute("data-wf-component-id"),
        transform: style.transform,
        opacity: style.opacity,
        visible:
          rect.width > 1 &&
          rect.height > 1 &&
          rect.bottom > 0 &&
          rect.top < innerHeight &&
          rect.right > 0 &&
          rect.left < innerWidth,
      };
    });
    data.textMotion = [...document.querySelectorAll("[data-text]")].map(
      (element) => {
        const rect = element.getBoundingClientRect(),
          first = element.querySelector(".char-wrap") || element,
          style = getComputedStyle(first);
        return {
          type: element.getAttribute("data-text"),
          opacity: style.opacity,
          transform: style.transform,
          visible:
            rect.width > 1 &&
            rect.height > 1 &&
            rect.bottom > 0 &&
            rect.top < innerHeight &&
            rect.right > 0 &&
            rect.left < innerWidth,
        };
      },
    );
    output.dataset.snapshot = JSON.stringify(data);
    output.dataset.state = state;
    parent.postMessage({ type: "leak:observation", snapshot: data }, "*");
    return data;
  }
  async function jump(id, progress) {
    const section = document.getElementById(id);
    if (!section) throw Error("Missing state section: " + id);
    const top = section.getBoundingClientRect().top + scrollY;
    const target =
      top + Math.max(0, section.offsetHeight - innerHeight) * progress;
    if (window.lenis)
      window.lenis.scrollTo(target, { immediate: true, force: true });
    else window.scrollTo({ top: target, behavior: "instant" });
    await wait(id === "apartment" ? 6100 : 1800);
    snapshot(id + ":" + progress);
  }
  let ready = false;
  window.addEventListener("message", async (event) => {
    if (
      event.source !== parent ||
      !/^http:\/\/127\.0\.0\.1:(?:4173|4175)$/.test(event.origin) ||
      event.data?.type !== "leak:state" ||
      !ready
    )
      return;
    try {
      const command = event.data;
      if (command.action === "top") {
        if (window.lenis) window.lenis.scrollTo(0, { immediate: true });
        else window.scrollTo({ top: 0, behavior: "instant" });
        await wait(1500);
        snapshot("top");
      } else if (command.action === "scroll")
        await jump(command.id, command.progress);
      else if (command.action === "body" || command.action === "footer") {
        const target =
          Math.max(0, document.documentElement.scrollHeight - innerHeight) *
          (command.action === "body" ? 0.5 : 0.99);
        if (window.lenis)
          window.lenis.scrollTo(target, { immediate: true, force: true });
        else window.scrollTo({ top: target, behavior: "instant" });
        await wait(1800);
        snapshot(command.action);
      } else if (command.action === "menu") {
        const trigger = document.querySelector(".nav_trigger");
        if (innerWidth > 767)
          trigger.dispatchEvent(
            new MouseEvent("mouseover", {
              bubbles: true,
              relatedTarget: document.body,
            }),
          );
        else activate(trigger.querySelector(".u-btn") || trigger);
        output.dataset.menuAfterClick =
          document.querySelector(".nav_content").className;
        flushStyles();
        await wait(1800);
        snapshot("menu");
      } else if (command.action === "modal") {
        activate(document.querySelector('[data-trigger="modal-form"]'));
        output.dataset.modalAfterClick = [
          ...document.querySelectorAll(".u-modal"),
        ]
          .map((element) => element.className)
          .join("|");
        flushStyles();
        await wait(1800);
        snapshot("modal");
      } else if (command.action === "close") {
        document
          .querySelectorAll(".u-modal.modal_state-open")
          .forEach((dialog) =>
            activate(dialog.querySelector("[data-close-modal]")),
          );
        if (document.querySelector(".nav_content.w--open")) {
          if (innerWidth > 767)
            document
              .querySelector(".w-dropdown")
              .dispatchEvent(
                new MouseEvent("mouseout", {
                  bubbles: true,
                  relatedTarget: document.body,
                }),
              );
          else activate(document.querySelector(".nav_trigger .u-btn"));
        }
        document
          .querySelectorAll('.faq-item_trigger[aria-expanded="true"]')
          .forEach((trigger) => trigger.click());
        flushStyles();
        // The source dropdown waits 450ms before its 600ms closing action group.
        const delay = Number(
          document.querySelector(".w-dropdown")?.getAttribute("data-delay") ||
            0,
        );
        await wait(Math.max(1500, delay + 1000));
        snapshot("closed");
      } else if (command.action === "faq") {
        activate(document.querySelector(".faq-item_trigger"));
        await wait(800);
        snapshot("faq-open");
      }
    } catch (error) {
      output.dataset.error = error.message;
      parent.postMessage(
        { type: "leak:probe-error", message: error.message },
        "*",
      );
    }
  });
  async function initialize() {
    await document.fonts.ready;
    const needsIx3 = !document.querySelector('script[src*="webflow.c5f0c373"]');
    for (
      let attempt = 0;
      attempt < 100 &&
      !document.documentElement.classList.contains(
        needsIx3 ? "w-mod-ix3" : "w-mod-ix",
      );
      attempt++
    )
      await wait(50);
    document
      .querySelectorAll("img")
      .forEach((image) => (image.loading = "eager"));
    await Promise.race([
      Promise.allSettled([...document.images].map((image) => image.decode())),
      wait(7000),
    ]);
    await wait(300);
    ready = true;
    snapshot("top");
  }
  if (document.readyState === "loading")
    document.addEventListener("DOMContentLoaded", initialize);
  else initialize();
})();
