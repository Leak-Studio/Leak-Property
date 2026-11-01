# Leak Properti

Static Indonesian concept website. Site files are located in `dist/` and can be served by any static web server. Property examples and legal documents are mockups; the contact form does not send data.

## Run locally

Use Node.js 20 or later. There are no npm dependencies to install.

```sh
npm run dev
```

Open [the local site](http://127.0.0.1:4173/). Files are served directly from `dist/`. Reload the browser after editing JavaScript or CSS.

To serve another directory or port, run:

```sh
node scripts/serve.mjs ../baseline-dist 4174
```

## Verify scroll behavior

1. Run `npm run check` to check JavaScript syntax.
2. Open [the scroll checks](http://127.0.0.1:4173/?verify).
3. Click **Run scroll checks** and keep the tab active until the results appear.
4. Repeat at desktop, tablet, and phone widths. Resize the same page between runs to check that scroll scenes rebuild.
5. Scroll through the project zoom and all three service panels with a mouse or trackpad. Reverse direction in each scene.
6. Open a modal, scroll its contents, close it, and confirm that page scrolling resumes.
7. Expand the FAQ, follow an anchor link, and check that the destination is aligned.
8. Enable your device's reduced-motion preference and reload. The service panels must remain readable without the horizontal animation.

The checks send five repeatable streams of synthetic wheel events through the bundled Lenis handler. They compare browser scroll position with Lenis's commanded position, then check sticky bounds, the last service panel, reverse scrolling, anchors, and modal locks. Position drift is a synchronization check, not a device FPS benchmark. Use the manual scroll check to assess physical wheel and touch behavior.

To check the page without GSAP and Lenis, open [the native fallback](http://127.0.0.1:4173/?verify&native). The local server omits those script tags for this URL only.

The verification panel and native fallback are local development features. Production serves the files in `dist/` without injecting test code.

## Reference motion

The interaction reference is [Stanzza](https://stanzza.design/), inspected on 1 November 2026. The local implementation uses its own markup and the existing Leak Properti assets.

The preloader fans out image cards, fades the title, and expands the hero video. Project images have two temporary layers during the scroll zoom. The service section changes from an introduction into a horizontal sequence. Navigation opens as a compact desktop dropdown or a mobile panel above a translucent backdrop. Modals fade in and move upward after a short delay.

Header buttons and floating project links use translucent backgrounds with a 4px backdrop blur. The menu opens and closes over 0.45 seconds. Modal opacity changes over 0.5 seconds, with a 0.35-second card entrance after a 0.2-second delay. Heading characters animate over 1.5 seconds with a 0.03-second stagger.

These interactions adapt the reference to the existing Indonesian concept content. The calendar and contact form remain demonstrations. The reference's business data, photographs, video, Webflow runtime, and booking integrations are not included.

## Edit motion

`dist/app.js` renders pages and initializes scroll behavior. `setupSmoothScroll()` owns the Lenis clock and its cleanup. `initServiceScene()`, `initProjectScene()`, and `initCompositionScene()` define the scroll scenes. GSAP rebuilds these scenes when their media queries change.

Keep CSS `scroll-behavior: auto` while Lenis runs. Do not add CSS transitions to properties animated by GSAP. Split text after fonts load, and refresh ScrollTrigger when content changes height. The service timeline ends at `bottom bottom`, where the CSS sticky stage finishes.

Bundled third-party libraries and their licenses are listed in `dist/vendor/NOTICE.txt`.
