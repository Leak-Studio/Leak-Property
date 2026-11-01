# Exported frontend and comparison contract

The browser receives populated static HTML, generated Webflow CSS, the original page-specific IX2/IX3 initializers, and the original attribute-driven motion helpers. There is no runtime `#app` renderer and no replacement scene choreography.

## Build and edit

```sh
python -m pip install -r requirements-build.txt
npm run build
npm run check
npm run dev
```

Edit `source/site.json` for copy, local route targets, and media paths. Each text/media binding is shared by every occurrence that uses it. `source/exports/` preserves the page skeletons and binding placeholders. `scripts/build.py` emits `dist/` without network access. The development server serves the generated files directly.

Keep the five project-detail skeletons separate. They share an initializer but have different vertical/horizontal image sequences and repeated-component relationships. A shared generic detail renderer would change the animation contract.

## Ownership

| State                                                             | Owner                                         |
| ----------------------------------------------------------------- | --------------------------------------------- |
| Page layout, rem scale, responsive breakpoints                    | Pinned generated stylesheet and export markup |
| Scroll timelines and generated interaction actions                | Webflow IX3 and IX2 page initializer          |
| Wheel smoothing and scroll locks                                  | One Lenis instance in `source/adapter.js`     |
| Heading reveals, image reveals, source galleries                  | Pinned attribute-driven helpers               |
| Local demo submission, focus, reading time, legacy anchor aliases | The narrow local adapter                      |
| Branding and unavailable booking content                          | `source/adapter.css` and bound local content  |

The local adapter creates no GSAP scenes. Lenis advances once on the GSAP clock, while CSS scrolling remains `auto`. Webflow owns dropdown, FAQ, gallery, and original scroll action state. Modal class behavior and its CSS transitions retain the source attribute contract.

The original company integrations are removed. Forms have a capturing local submit boundary and a `form-action 'none'` policy. HubSpot scripts, iframe destinations, original business mail, telephone, and social destinations are not published as Leak contact channels.

## Pinned contracts

`source/contracts.json` stores each source page ID, component/target identity multiset, normalized parent-child/position hash, encoded repeater identity hashes, ordered script roles, and section sequence. The media-tag normalization permits the deliberate hero image-to-video substitution while retaining its identity and wrapper.

`source/runtime.lock.json` records runtime/font/UI resource URLs and hashes. The generated stylesheet's resource URLs are localized. Reversing those recorded URL substitutions must recover the upstream stylesheet hash; arbitrary geometry or breakpoint overrides fail the build. Adapted stylesheets have matching Subresource Integrity values.

Gallery repeater templates are percent-encoded HTML. The builder resolves their copy/media bindings before re-encoding them. Duplicate IDs in scoped CMS instances are retained deliberately. A global uniqueness cleanup changes the contract.

The `.gitattributes` rules preserve exact runtime and stylesheet bytes across Windows checkouts. Do not format files in `source/runtime/` or edit generated `dist/` files by hand.

## Why preserve the exports

Two designs were compared: transforming complete static exports, and reconstructing normalized family templates with imported interaction data. The first was selected because it preserves the actual DOM relationships with fewer migration risks. The second contributed the central copy/route/media bindings and contract checks. Both candidates used the inherited model because other-family runners were unavailable.

The previous renderer, handwritten scene timelines, and accumulated page layout overrides were removed. Loading the original runtime on top of that renderer would have left two incompatible structures and animation owners.

## Evaluate the 90% target

Architecture gates are independent of a score: all local routes and media resolve, the original target ancestry and initializer profiles match, generated style rules match, and the original business integrations cannot receive demo submissions.

The per-page comparison rubric allocates 40 points to geometry/typography, 40 to motion, and 20 to interactions. Geometry/typography uses 75% measured box alignment and 25% loaded font metrics. Box tolerance is 2% of the viewport dimension, with a 2px floor. Motion combines exact pinned configuration with observed movement/opacity at corresponding states. Interaction points require observed open/close states. Every route and tested viewport must pass independently; a landing average cannot hide a poor detail page. Overall page height must also remain within 5% of the reference fixture.

Media subject matter, brand artwork, Indonesian wording, and local demo booking content are declared differences. The rubric is a layout/motion measure under those choices, not a full-image pixel identity percentage. Functional test counts alone do not establish similarity.

The development-only `/compare` page loads paired fixtures at matched iframe viewport sizes. Its outer display scale keeps both frames visible without changing their CSS viewport. The observer preloads media, waits for fonts/runtime readiness, and reads geometry and computed motion state. This is a warm, deterministic comparison, not a loading-time or FPS benchmark. Full-page live-browser checks complement the fixture observations.

Reference fixtures are captured explicitly with `scripts/capture-reference.py`; they are ignored by Git and never served by production. A changed source hash requires an explicit reviewed refresh. See the README for commands.
