# Leak Properti

Static Indonesian concept website with the same exported browser architecture as the Stanzza reference: populated Webflow HTML, generated responsive CSS, page-specific IX2/IX3, GSAP, Lenis, and Swiper. Photos and video remain the existing Leak Properti assets. Contact and scheduling are local demonstrations.

## Build locally

Use Python 3.10 or later and Node.js 20 or later.

```sh
python -m pip install -r requirements-build.txt
npm run build
npm run check
npm run dev
```

Open [the local site](http://127.0.0.1:4173/). Reload after rebuilding. Hosting serves only `dist/`; no Python, CMS, or Webflow account is needed in production.

Edit copy, route targets, and media paths in `source/site.json`. The preserved page skeletons are in `source/exports/`. Runtime and generated layout inputs are pinned in `source/runtime/`. Do not edit `dist/` by hand or format pinned runtime files.

## Verify runtime behavior

Open [the runtime checks](http://127.0.0.1:4173/?verify), click **Run runtime checks**, and keep the tab active. The checks exercise five repeatable wheel streams, position synchronization, dialog locks, local demo submission, and runtime media origins. Position drift is a synchronization check, not an FPS benchmark.

Scroll through the landing preloader, composition, project zoom, all service panels, about cards, FAQ, and footer. Test reverse scrolling, menu hover on desktop, menu taps on mobile, gallery controls, dialog close, and in-page links. Check the individual project variants and all article/document routes.

`npm run check` verifies generated output, runtime hashes, stylesheet integrity, identity ancestry, encoded gallery templates, script order, routes, and local integration boundaries. It also checks owned JavaScript syntax.

## Compare all pages

Capture the recorded reference explicitly. This step accesses the network; normal builds remain offline.

```sh
python scripts/capture-reference.py
```

In a second terminal, serve the ignored fixtures:

```sh
node scripts/serve.mjs .reference 4175
```

With the normal server on port 4173, open [the paired comparison](http://127.0.0.1:4173/compare). Choose a route, viewport, and state, or run **Ukur semua halaman** for the full comparison. Both iframe CSS viewports have the selected dimensions; the outer display scale keeps them visible together.

Reference fixtures cancel form submission and omit the original booking integration. If the source hashes change, review a new capture before using `--allow-changed`. The fixture directory is ignored by Git and is not part of the hosted output.

The comparison evaluates layout, typography, motion, and intrinsic UI behavior under the user's chosen Leak media and Indonesian content. It does not claim pixel identity for different photos, brand artwork, or demo booking content. See [the architecture and acceptance contract](docs/frontend-architecture.md) for ownership and scoring details.

## Runtime provenance

The reference was inspected on 1 November 2026. `source/reference.lock.json` records the page captures. `source/runtime.lock.json` records runtime, font, and UI asset origins and hashes. Dependency notices are in `dist/vendor/NOTICE.txt`.
