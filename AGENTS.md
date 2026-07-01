# AGENTS.md

## Project Overview

Brutal Blog is a Vue 3 portfolio site built with Vue CLI 5, Vue Router 4, Tailwind CSS 3, Font Awesome, Cypress, and an optional local GraphQL server. The app contains home, photography, blog/project, about, contact, services, video, and login routes.

The project is image-heavy and design-driven. Preserve the reduced portfolio feel, the existing component hierarchy, and the curated photo/content decisions.

## Common Commands

```bash
npm install
npm run dev
npm run serve
npm run graphql
npm run build
npm run lint
```

- `npm run dev` starts both the local GraphQL server and the Vue dev server.
- `npm run serve` starts only the Vue CLI frontend.
- `npm run graphql` starts `scripts/graphql-server.js` at `http://127.0.0.1:8000/graphql`.
- The Vue app usually runs at `http://localhost:8080/`; Vue CLI may choose `8081` or another port if `8080` is busy.

## Verification

Before handing off code changes, run the checks that match the touched surface:

```bash
npm run lint
npm run build
```

For gallery or route behavior, start the app and run the relevant Cypress tests:

```bash
npm run dev
npx cypress run --browser electron --spec cypress/e2e/gallery-sessions.cy.js --env BASE_URL=http://127.0.0.1:8080/
npx cypress run --browser electron --spec cypress/e2e/gallery-modal.cy.js --env BASE_URL=http://127.0.0.1:8080/
```

Adjust `BASE_URL` to the actual Vue dev-server URL.

## Architecture Notes

- Main app bootstrap: `src/main.js`
- Router config: `src/router/index.js`
- Global CSS and Tailwind layers: `src/index.css`
- Tailwind theme extensions: `tailwind.config.js`
- Vue CLI/history fallback config: `vue.config.js`
- Local blog preview data: `src/data/blogPreviews.js`
- Local blog detail data: `src/data/blogPostDetails.js`
- Optional GraphQL API: `scripts/graphql-server.js`

Components follow the existing Atoms/Molecules/Organisms/Pages/Templates structure under `src/components/`. Keep new components in the nearest matching layer instead of introducing a parallel structure.

## Routing

Routes are defined in `src/router/index.js`:

- `/`
- `/photography`
- `/blog`
- `/projects` redirects to `/blog`
- `/blogpost/:id`
- `/about`
- `/contact`
- `/leistungen`
- `/video-call`
- `/login`

The app uses HTML5 history routing. Static deployments must fall back to `index.html` for direct route visits.

## Styling Guidelines

- Prefer Tailwind utilities in Vue templates.
- Keep shared tokens, CSS variables, and global helpers in `src/index.css`.
- Keep theme extensions in `tailwind.config.js`.
- Reuse existing helpers such as `page-shell`, `section-stack`, `split-grid`, `contact-grid`, `chrome-reset`, `hero-tone`, `motion-item`, and `is-visible`.
- Preserve dark/light theme behavior based on `document.documentElement.dataset.theme`.
- Avoid large unrelated visual rewrites when fixing local bugs.

## Gallery and Image Rules

The photography gallery is intentionally curated and file-name sensitive.

- Main gallery component: `src/components/Organisms/PhotographyGallery/PhotographyGallery.vue`
- Image root: `src/components/Pages/HomePage/PhotographyGallery/`
- Main photos use normalized `photo_XXX.jpg` names.
- Session and retro folders are loaded through Webpack `require.context`.
- Do not rename, move, or delete image assets unless the change explicitly requires it.
- If changing modal behavior, verify click navigation, arrow-key navigation, and Escape close behavior.

Important gallery folders include:

- `session-*` for blog/session image sets
- `retro-*` for attached retro series
- `aussortiert` for preserved outtakes

## Blog Data

The files `BlogOverview_GraphQL.vue` and `BlogEntry_GraphQL.vue` are historically named, but the live Vue pages currently use local data from `src/data/`. The GraphQL server is optional development support, not the primary frontend data source.

Posts with `published: false` should stay hidden from public views.

## Agent Workflow

- Check `git status --short` before editing and avoid touching unrelated user changes.
- Use `rg`/`rg --files` for repo search.
- Keep edits scoped to the requested behavior.
- Do not commit build artifacts, `node_modules/`, `dist/`, or temporary files.
- When changing package dependencies, update both `package.json` and `package-lock.json`.
- If a command fails because of environment state, report the exact failed command and the relevant error.
