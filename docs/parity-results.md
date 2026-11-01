# Frontend comparison results

Measured on 1 November 2026 against pinned published Stanzza page fixtures. All 14 local routes pass at every tested viewport under the declared layout/motion rubric. This is not full-image pixel identity: the user chose the existing Leak photographs/video, and branding/copy are Indonesian.

The static build independently passes identity ancestry, section order, exact runtime profiles, generated CSS normalization, SRI, local media, link, and integration-boundary gates. The browser comparison exercises menu and modal open/close, body/footer states, and the landing composition, project zoom, service panels, about, and FAQ states.

| Local route | Desktop 1280 x 800 | Tablet 790 x 850 | Mobile 429 x 928 | Maximum page-height difference |
| --- | ---: | ---: | ---: | ---: |
| `/` | 99.67 | 94.78 | 93.55 | 0.61% |
| `/blog/` | 100.00 | 96.25 | 99.22 | 1.21% |
| `/blog/cahaya-sebagai-material/` | 100.00 | 92.50 | 92.00 | 1.12% |
| `/blog/rumah-yang-terasa-utuh/` | 95.78 | 95.31 | 92.00 | 2.58% |
| `/blog/merancang-ruang-yang-bernapas/` | 95.78 | 92.97 | 99.50 | 1.36% |
| `/documents/cookie-policy/` | 94.11 | 98.39 | 93.18 | 1.15% |
| `/documents/privacy-policy/` | 93.85 | 94.11 | 93.65 | 0.92% |
| `/documents/terms-of-service/` | 94.11 | 94.11 | 98.27 | 0.75% |
| `/projects/` | 98.56 | 98.27 | 96.84 | 0.11% |
| `/projects/rumah-antara/` | 96.07 | 95.36 | 90.62 | 2.90% |
| `/projects/teras-cahaya/` | 95.66 | 92.89 | 92.08 | 3.77% |
| `/projects/ruang-teduh/` | 92.89 | 92.89 | 92.92 | 3.50% |
| `/projects/rumah-sela/` | 93.29 | 96.05 | 92.08 | 3.29% |
| `/projects/ruang-senja/` | 97.14 | 95.71 | 91.75 | 0.74% |

All target fixture images were loaded. All measured open/close interaction checks passed. The lowest composite result is 90.62; every page-height difference stays below the independent 5% gate.

The observer loads media eagerly, waits for fonts and runtime readiness, and keeps paired CSS viewports identical. These are warm deterministic comparisons, not FPS, network-loading, physical-phone, or Safari benchmarks.

See [the architecture and scoring contract](frontend-architecture.md) and `scripts/score-parity.py` for the exact calculation. Raw observations were saved with the local task evidence. Refreshing the reference requires reviewing its capture hashes.
