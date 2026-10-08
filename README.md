# Scattering Theory for Ultracold Atomic and Molecular Experiments

An Obsidian knowledge base on scattering theory for ultracold atomic and molecular physics experiments.

The notes develop scattering from a worked one-dimensional example through asymptotic dynamics, channel representations, scattering amplitudes, cross sections, partial waves, low-energy parameters, and Feshbach resonances.

## Reading order

- [Scattering Theory 0 - One Problem Worked Through - The Basic Concepts of Scattering](Scattering%20theory%20notes/Scattering%20Theory%200%20-%20One%20Problem%20Worked%20Through%20-%20The%20Basic%20Concepts%20of%20Scattering.md)
- [Scattering Theory 0 Supplement - The General Solution with Both Incidence Directions](Scattering%20theory%20notes/Scattering%20Theory%200%20Supplement%20-%20The%20General%20Solution%20with%20Both%20Incidence%20Directions.md)
- [Scattering Theory 1 - Asymptotic Dynamics and the Lippmann--Schwinger Equation](Scattering%20theory%20notes/Scattering%20Theory%201%20-%20Asymptotic%20Dynamics%20and%20the%20Lippmann--Schwinger%20Equation.md)
- [Scattering Theory 2 - Channel-Resolved Coordinate and Momentum Representations](Scattering%20theory%20notes/Scattering%20Theory%202%20-%20Channel-Resolved%20Coordinate%20and%20Momentum%20Representations.md)
- [Scattering Theory 3 - Channel-Resolved Scattering Amplitudes](Scattering%20theory%20notes/Scattering%20Theory%203%20-%20Channel-Resolved%20Scattering%20Amplitudes.md)
- [Scattering Theory 4 - Transition Rates, Flux, and Cross Sections](Scattering%20theory%20notes/Scattering%20Theory%204%20-%20Transition%20Rates%2C%20Flux%2C%20and%20Cross%20Sections.md)
- [Scattering Theory 5 - Partial Waves, Channel Blocks, and Phase Shifts](Scattering%20theory%20notes/Scattering%20Theory%205%20-%20Partial%20Waves%2C%20Channel%20Blocks%2C%20and%20Phase%20Shifts.md)
- [Scattering Theory 6 - Low-Energy Scattering, Effective Range, and Scattering Length](Scattering%20theory%20notes/Scattering%20Theory%206%20-%20Low-Energy%20Scattering%2C%20Effective%20Range%2C%20and%20Scattering%20Length.md)
- [Feshbach Resonance I - Projection Formalism and the Origin of the Resonant Scattering Length](Scattering%20theory%20notes/Feshbach%20Resonance%20I%20-%20Projection%20Formalism%20and%20the%20Origin%20of%20the%20Resonant%20Scattering%20Length.md)

## Open in Obsidian

Choose **Open folder as vault** and select this repository root. The included `.obsidian` folder supplies the editor configuration, shortcuts, plugins, and image styling. Enable community plugins when Obsidian asks if you trust this vault.

New notes default to `Scattering theory notes/`; new attachments default to `Scattering theory notes/Pictures/`.

## Included editing support

- **Callout Integrator**: add or remove blockquote prefixes with Ctrl+Shift+. and Ctrl+Shift+, on Windows.
- **Better Math in Callouts & Blockquotes**: improve math rendering in Live Preview.
- **Obsidian Git**: optional Git integration. Configure it after connecting your own GitHub repository; the original vault Git settings are not copied.
- **image-custom.css**: preserve the existing figure layout, image alignment, and small muted captions.

Use built-in `note` and `info` callouts for explanatory material and `danger` for personal review questions or unresolved issues. The former custom `mythoughts` callouts have been converted to `danger`.

The image snippet uses `figure` callouts as containers. For example:

```markdown
> [!figure]
> ![[Classical analog.svg|center|600]]
> A caption in the small, muted figure style.
```

Image aliases such as `center`, `left`, and `right` control alignment within figure callouts. Numeric dimensions control image size. Figure metadata such as `[!figure|center]` controls caption alignment.

## Website and automatic publishing

The website uses **Quartz 5.0.0 + GitHub Pages**. Quartz reads `Scattering theory notes/` directly, including its images and homepage. There is no second copy of the notes to synchronize. The repository root remains the Obsidian vault.

Expected website address after the first successful deployment:

**https://shaozhen545.github.io/scattering-theory-for-ultracold/**

### First publication (one time)

1. Commit and push the website files along with the notes to the existing `main` branch. Include `.github/workflows/deploy.yml`, `quartz/`, `scripts/`, `package.json`, `package-lock.json`, `quartz.config.yaml`, `quartz.lock.json`, `quartz.ts`, the TypeScript configuration and `QUARTZ_LICENSE.txt`. Normal Git staging includes these automatically. Do not upload `node_modules/`, `public/` or the ignored caches.
2. Open [repository Settings → Pages](https://github.com/SHAOZHEN545/scattering-theory-for-ultracold/settings/pages). Under **Build and deployment → Source**, select **GitHub Actions**.
3. Open [Actions](https://github.com/SHAOZHEN545/scattering-theory-for-ultracold/actions), select **Publish scattering notes** and wait for both `build` and `deploy` to succeed. If the first run preceded enabling Pages, choose **Run workflow** to rerun it.
4. Open the website address above. Until deployment succeeds, this address may return 404.

### Everyday editing

Edit and save the original notes in your local editor or Obsidian, then commit and push to `main`. GitHub Actions renders and publishes the latest pushed content. Refresh the website after the deployment succeeds. Local changes that have not been pushed are not yet on the website.

New notes and images under `Scattering theory notes/` are picked up automatically. The explorer and search update without configuration changes. Add a link to `index.md` if a new chapter should also appear in the curated reading order. Notes marked `draft: true` in YAML frontmatter are excluded by Quartz.

The build validates note pages, internal links, heading anchors, local assets and MathJax errors before deploying. A failed build leaves the last successful website online; inspect the failed step under Actions. The workflow also supports **Run workflow** for a manual rebuild.

### Local preview

With Node.js 24 and npm installed, run these commands from the repository root:

```sh
npm ci
npm run plugins
npm run preview
```

Open **http://localhost:8080**. The preview rebuilds when notes change. For a production check, run `npm run build` followed by `npm run verify`.

Quartz core is vendored in `quartz/` from the official `v5.0.0` release (commit `ab346fa66a895e12d63a308e70ce330ba795822a`), with its MIT license in `QUARTZ_LICENSE.txt`. npm dependencies are locked in `package-lock.json`; Quartz plugins are pinned to commits in `quartz.lock.json`. The generic figure and equation styles live in `quartz/styles/custom.scss`. Two small corrections in Quartz's plugin installer handle spaces in the Windows repository path and return a failing exit status when plugin installation fails. `scripts/adapt-quartz-plugins.mjs` makes the pinned explorer, search and graph plugins use Quartz's existing shared content-index request, so they work under the GitHub repository subpath and in future nested note folders. The `plugins` command applies this adapter automatically and safely on repeated runs. Keep `note-properties` enabled: it supplies title and frontmatter parsing even though its property display is hidden.

Only `Scattering theory notes/` is used as website content. Root maintenance documents, `.obsidian/`, local plugin settings and website source are not rendered as public notes. Renaming the GitHub repository later requires updating `configuration.baseUrl` in `quartz.config.yaml` and the repository links here.

Changes here do not automatically update the original thesis vault. Continue editing in this independent vault when making changes for this collection.
