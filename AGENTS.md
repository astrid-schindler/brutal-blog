# AGENTS.md

## Project Overview

Arlowe Photography Portfolio is a Vue 3 portfolio built with Vue CLI 5, Vue Router 4, Tailwind CSS 3, Font Awesome, Cypress, and an optional local GraphQL server. It is a reduced, image-led portfolio with a projects overview, photography gallery, about, contact, services, login, and video routes.

Preserve the curated visual direction, image choices, lowercase UI treatment, and existing component structure.

## Commands

```bash
npm install
npm run dev
npm run serve
npm run graphql
npm run build
npm run lint
```

- `npm run dev` starts the local GraphQL server and the Vue dev server.
- `npm run serve` starts only the Vue CLI frontend.
- `npm run graphql` starts `scripts/graphql-server.js` at `http://127.0.0.1:8000/graphql`.
- The Vue app usually runs at `http://localhost:8080/`; Vue CLI may choose another port if needed.

## Verification

For code changes, run the relevant checks before handing off:

```bash
npm run lint
npm run build
```

For gallery behavior, start the app and run the focused Cypress specs:

```bash
npm run dev
npx cypress run --browser electron --spec cypress/e2e/gallery-sessions.cy.js --env BASE_URL=http://127.0.0.1:8080/
npx cypress run --browser electron --spec cypress/e2e/gallery-modal.cy.js --env BASE_URL=http://127.0.0.1:8080/
```

Adjust `BASE_URL` to the actual dev-server URL.

## Architecture

- App bootstrap: `src/main.js`
- Router: `src/router/index.js`
- Global CSS and Tailwind layers: `src/index.css`
- Tailwind theme: `tailwind.config.js`
- Vue CLI config: `vue.config.js`
- Local project preview data: `src/data/blogPreviews.js`
- Local project detail data: `src/data/blogPostDetails.js`
- Optional GraphQL server: `scripts/graphql-server.js`

Components follow `Atoms`, `Molecules`, `Organisms`, `Pages`, and `Templates` under `src/components/`. Add new components to the nearest matching layer.

## Routing

Current public routes:

- `/`
- `/photography`
- `/projects`
- `/blog` redirects to `/projects`
- `/blogpost/:id`
- `/about`
- `/contact`
- `/leistungen`
- `/video-call`
- `/login`

The app uses HTML5 history routing. Static hosting must fall back to `index.html` for direct route visits.

## Styling

- Prefer Tailwind utilities in Vue templates.
- Keep shared tokens and global helpers in `src/index.css`.
- Keep theme extensions in `tailwind.config.js`.
- Reuse helpers such as `page-shell`, `section-stack`, `split-grid`, `contact-grid`, `chrome-reset`, `hero-tone`, `motion-item`, and `is-visible`.
- Preserve the lowercase UI convention. `TheHeading` handles lowercase display centrally.
- Do not make broad visual rewrites while fixing local behavior.

## Gallery

The photography gallery is curated and filename-sensitive.

- Gallery component: `src/components/Organisms/PhotographyGallery/PhotographyGallery.vue`
- Image root: `src/components/Pages/HomePage/PhotographyGallery/`
- Main photos use `photo_XXX.jpg` names.
- Session and retro folders are discovered through Webpack `require.context`.
- Do not rename, move, or delete image assets unless explicitly requested.
- If changing modal behavior, verify click navigation, arrow keys, and Escape close behavior.

Important folders:

- `session-*` for project/session image sets
- `retro-*` for attached retro series
- `aussortiert` for preserved outtakes

## Data

The projects pages are historically named `BlogOverview_GraphQL.vue` and `BlogEntry_GraphQL.vue`, but the frontend currently uses local data from `src/data/`. The GraphQL server is optional development support.

Entries with `published: false` should stay hidden from public views.

## Agent Workflow

- Check `git status --short` before editing.
- Do not touch unrelated user changes.
- Use `rg` or `rg --files` for repo search.
- Keep changes scoped to the request.
- Do not commit `node_modules/`, `dist/`, temporary files, or generated artifacts.
- When changing dependencies, update both `package.json` and `package-lock.json`.
- Default workflow targets `dev` unless the user explicitly requests another branch.
