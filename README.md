# Arlowe Photography Portfolio

**Language / Sprache:** [Deutsch](#deutsch) | [English](#english)

---

## Deutsch

Arlowe Photography Portfolio ist ein Vue-3-Portfolio mit Blog, Photography Gallery, About-, Contact-, Services-, Login- und Video-Route. Die Seite ist als reduzierte, bildstarke Portfolio-Erfahrung aufgebaut: wenig externes CSS, Tailwind-Utilities in den Komponenten, zentrale Design-Tokens in `src/index.css` und `tailwind.config.js`.

Code, Konzept und Projektverantwortung: **Astrid Schindler**.

### Demo

Die aktuelle Demo-Version ist auf Surge veröffentlicht:

**[https://arlowe-santoro.surge.sh/](https://arlowe-santoro.surge.sh/)**

Teile dieser Seite wurden mit Unterstützung von OpenAI Codex umgesetzt. Codex wurde unter anderem für Code-Aufräumarbeiten, Tailwind-Strukturierung, lokale Scripts, Blog-/Galerie-Reparaturen, Tests und README-Dokumentation eingesetzt. Gestaltung, Inhalte, Bildauswahl und finale Entscheidungen bleiben projektspezifisch.

### Umsetzung

Händisch programmiert und kuratiert wurden die grundlegende Projektidee, die Seitenstruktur, das visuelle Konzept, die inhaltliche Ausrichtung, die Komponentenarchitektur und die finale Auswahl der Bild- und Textinhalte. Dazu gehören insbesondere Routing, Seitenaufbau, Navigation, Hero-Bereich, About-/Contact-/Service-Seiten, Blogstruktur, Galerie-Konzept, manuelle Bildauswahl, UI-Texte und gestalterische Entscheidungen.

Mit Codex-Unterstützung wurden Teile des bestehenden Codes überarbeitet, repariert und dokumentiert. Dazu zählen die Vereinheitlichung der Galerie-Dateinamen, das Wiederherstellen und Verdrahten von Session-Bildern, die Tailwind-Aufräumung, lokale Dev-/GraphQL-Scripts, Testläufe, kleinere Bugfixes und diese technische README.

### Tech Stack

- Vue 3 als Frontend-Framework
- Vue CLI 5 als Build- und Dev-Tooling
- Vue Router 4 mit HTML5-History-Routing
- Tailwind CSS 3 mit globalen Tokens und Utility-Klassen
- Font Awesome für UI-Icons
- Open-Meteo API für Wetterdaten
- GraphQL 15 für den optionalen lokalen Blog-API-Server
- Cypress für End-to-End-Tests
- ESLint für Vue- und JavaScript-Prüfung

### Installation

Voraussetzungen:

- Node.js
- npm
- Git

Repository klonen und Abhängigkeiten installieren:

```bash
git clone git@github.com:astrid-schindler/brutal-blog.git
cd brutal-blog
npm install
```

### Entwicklung

Empfohlener Start:

```bash
npm run dev
```

Dieses Script startet parallel:

- `npm run graphql` für den lokalen GraphQL-Server auf `http://127.0.0.1:8000/graphql`
- `npm run serve` für die Vue-App

Die Vue-App läuft normalerweise unter `http://localhost:8080/`. Wenn der Port belegt ist, wählt Vue CLI automatisch den nächsten freien Port, zum Beispiel `8081`.

Nur das Frontend starten:

```bash
npm run serve
```

### Scripts

- `npm run dev`: startet GraphQL-Server und Vue-Dev-Server gemeinsam.
- `npm run serve`: startet nur den Vue-CLI-Dev-Server mit Hot Reload.
- `npm run graphql`: startet den lokalen GraphQL-Server aus `scripts/graphql-server.js`.
- `npm run build`: erstellt den Produktions-Build im Ordner `dist/`.
- `npm run lint`: prüft Vue- und JavaScript-Dateien mit ESLint.

### Projektstruktur

```text
brutal-blog/
├── public/                 # Favicons, HTML-Einstiegspunkt
├── scripts/                # Dev- und GraphQL-Scripts
├── src/
│   ├── components/         # Atoms, Molecules, Organisms, Pages, Templates
│   ├── data/               # Lokale Blogdaten
│   ├── functions/          # Kleine UI-Helfer
│   ├── router/             # Vue-Router-Konfiguration
│   ├── App.vue             # App-Shell
│   ├── index.css           # Tailwind-Layer, Tokens, globale Utilities
│   └── main.js             # App-Bootstrap, Icons, Router, Motion
├── cypress/                # E2E-Tests
├── tailwind.config.js      # Tailwind Theme-Erweiterungen
├── vue.config.js           # Vue CLI + History-Fallback
└── package.json            # Scripts und Abhängigkeiten
```

### Routing

Die Routen liegen in `src/router/index.js`:

- `/` Startseite
- `/photography` Photography-Galerie
- `/blog` Blog- und Projektübersicht
- `/projects` Redirect auf `/blog`
- `/blogpost/:id` Detailseite für einzelne Blogposts
- `/about` About-Seite
- `/contact` Kontaktseite
- `/leistungen` Services-Seite
- `/video-call` Video-Seite
- `/login` Login-Seite

`vue.config.js` aktiviert `historyApiFallback`, damit direkte Aufrufe wie `/blog` oder `/blogpost/1` im Dev-Server auf `index.html` zurückfallen.

### Blog-Logik

Die Blogseiten heißen historisch noch `BlogOverview_GraphQL.vue` und `BlogEntry_GraphQL.vue`, nutzen aktuell aber lokale Daten:

- `src/data/blogPreviews.js` für die Blogübersicht
- `src/data/blogPostDetails.js` für Detailseiten und Bildserien

Die Detaildaten werden per dynamischem Import geladen, wodurch beim Build ein eigener Chunk für Blogdetails entsteht. Posts mit `published: false` werden ausgeblendet.

### Optionaler GraphQL-Server

Der lokale GraphQL-Server in `scripts/graphql-server.js` stellt dieselben Session-Blogdaten als einfache API bereit. Er ist aktuell optional und nicht die primäre Datenquelle der Vue-Blogseiten.

Endpoint:

```text
http://127.0.0.1:8000/graphql
```

Unterstützte Queries:

```graphql
query {
  allPosts {
    id
    title
    author
    category
    publishDate
    imageUrl
    excerpt
  }
}
```

```graphql
query {
  postById(id: "1") {
    id
    title
    content
    imageUrls
  }
}
```

Der Server liefert außerdem lokale Galerie-Bilder über `http://127.0.0.1:8000/project-images/...`.

### Photography Gallery

Die Photography Gallery liegt in:

```text
src/components/Organisms/PhotographyGallery/PhotographyGallery.vue
src/components/Pages/HomePage/PhotographyGallery/
```

Die Bilder sind auf `photo_XXX.jpg` normalisiert. Die Galerie nutzt `require.context`, damit Webpack die Bilder in Root- und Unterordnern findet.

Wichtige Ordner:

- `PhotographyGallery/photo_001.jpg` bis `photo_093.jpg` als Hauptgalerie
- `PhotographyGallery/session-*` für Blog- und Session-Bilder
- `PhotographyGallery/retro-*` für angehängte Retro-Serien
- `PhotographyGallery/aussortiert` als aussortierte, aber erhaltene Bildauswahl

Einzelne Coverbilder öffnen im Modal zusätzliche Serien:

- `photo_061.jpg` öffnet `retro-01-strecke`
- `photo_062.jpg` öffnet `retro-02-strecke`
- `photo_068.jpg` öffnet `retro-08-strecke`
- weitere Hauptbilder öffnen die `session-*`-Serien

Die Modalnavigation funktioniert per Klick, Pfeiltasten und Escape.

### Styling und Tailwind

Das Projekt ist so eingerichtet, dass möglichst viel Styling über Tailwind und wenige zentrale CSS-Regeln läuft.

Zentrale Dateien:

- `tailwind.config.js` erweitert Farben, Fonts, Max-Widths, Spacing, Timing-Funktionen und Animationen.
- `src/index.css` definiert Base-Tokens, Theme-Variablen, globale Layout-Helfer und wenige Komponentenklassen.
- Vue-Komponenten nutzen überwiegend Utility-Klassen direkt im Template.

Wichtige Konzepte:

- `--page-background`, `--text-color`, `--hero-navigation-color` als Theme-Farben
- `page-shell`, `section-stack`, `split-grid`, `contact-grid` als Layout-Helfer
- `chrome-reset` und `hero-tone` für Navigation/Footer/Weather über dem Hero
- `motion-item` und `is-visible` für Scroll-Animationen
- Dark-/Light-Theme über `document.documentElement.dataset.theme`

### App-Logik

`src/main.js` initialisiert Vue, Router, Font-Awesome-Icons, Scroll-Richtung und IntersectionObserver-basierte Motion-Klassen.

`src/functions/heroTone.js` prüft, ob Navigation, Weather und Footer gerade über dem Home-Hero liegen. Dann wechseln sie über `hero-tone` auf die passende Farbe.

`WeatherModule.vue` lädt aktuelle Wetterdaten für Rom über Open-Meteo:

```text
https://api.open-meteo.com/v1/forecast?latitude=41.89&longitude=12.51&current=temperature_2m,weather_code&timezone=Europe%2FRome
```

Die Uhrzeit wird lokal im Browser aktualisiert; die Wetter-API wird nicht im Sekundentakt abgefragt.

### Packages

Runtime-Abhängigkeiten:

- `vue`, `vue-router`, `core-js`
- `@vue/cli`
- `@fortawesome/*`
- `@emailjs/browser`
- `axios`
- `graphql`
- `villus`

Dev-Abhängigkeiten:

- `@vue/cli-service`, `@vue/cli-plugin-babel`, `@vue/cli-plugin-eslint`
- `@babel/core`, `@babel/eslint-parser`
- `eslint`, `eslint-plugin-vue`
- `postcss`, `autoprefixer`, `tailwindcss`
- `cypress`

### Tests

Für E2E-Tests muss die App laufen:

```bash
npm run dev
```

Cypress öffnen:

```bash
npx cypress open
```

Headless ausführen:

```bash
npx cypress run
```

Einzelne Gallery-Tests:

```bash
npx cypress run --browser electron --spec cypress/e2e/gallery-sessions.cy.js --env BASE_URL=http://127.0.0.1:8081/
npx cypress run --browser electron --spec cypress/e2e/gallery-modal.cy.js --env BASE_URL=http://127.0.0.1:8081/
```

Die URL muss zum tatsächlich laufenden Vue-Dev-Server passen.

### Build und Deployment

```bash
npm run build
```

Das Ergebnis liegt in `dist/`. Bei Deployment auf statischem Hosting muss der Server für Vue Router im History-Modus konfiguriert sein: direkte Pfade wie `/blog`, `/about` oder `/blogpost/1` müssen auf `index.html` zurückfallen.

Der Build kann wegen der vielen großen Galerie-Bilder Asset-Size-Warnungen ausgeben. Das ist kein Build-Fehler, sondern ein Hinweis auf mögliche Performance-Optimierung.

### Git

Remote:

```text
git@github.com:astrid-schindler/brutal-blog.git
```

Workflow:

```bash
git status
git add .
git commit -m "Describe your change"
git push origin master
```

Temporäre Arbeitsdaten wie `tmp/`, `node_modules/` und `dist/` gehören nicht in den normalen Commit.

---

## English

Arlowe Photography Portfolio is a Vue 3 portfolio with a blog, photography gallery, about, contact, services, login, and video route. The site is designed as a reduced, image-driven portfolio experience: minimal external CSS, Tailwind utilities inside Vue components, and centralized design tokens in `src/index.css` and `tailwind.config.js`.

Code, concept, and project ownership: **Astrid Schindler**.

### Demo

The current demo version is published on Surge:

**[https://arlowe-santoro.surge.sh/](https://arlowe-santoro.surge.sh/)**

Parts of this site were implemented with support from OpenAI Codex. Codex was used for code cleanup, Tailwind restructuring, local scripts, blog and gallery repairs, test runs, and README documentation. The visual direction, content, image selection, and final project decisions remain project-specific.

### Implementation

The core project idea, page structure, visual concept, content direction, component architecture, and final image and text selection were programmed and curated manually. This includes routing, page composition, navigation, hero area, about/contact/services pages, blog structure, gallery concept, manual image selection, UI copy, and design decisions.

With Codex support, parts of the existing codebase were revised, repaired, and documented. This includes the normalized gallery file names, restored and wired session images, Tailwind cleanup, local dev and GraphQL scripts, test runs, smaller bug fixes, and this technical README.

### Tech Stack

- Vue 3 as the frontend framework
- Vue CLI 5 for build and development tooling
- Vue Router 4 with HTML5 history routing
- Tailwind CSS 3 with global tokens and utility classes
- Font Awesome for UI icons
- Open-Meteo API for weather data
- GraphQL 15 for the optional local blog API server
- Cypress for end-to-end tests
- ESLint for Vue and JavaScript checks

### Installation

Requirements:

- Node.js
- npm
- Git

Clone the repository and install dependencies:

```bash
git clone git@github.com:astrid-schindler/brutal-blog.git
cd brutal-blog
npm install
```

### Development

Recommended local start:

```bash
npm run dev
```

This script starts both:

- `npm run graphql` for the local GraphQL server at `http://127.0.0.1:8000/graphql`
- `npm run serve` for the Vue app

The Vue app usually runs at `http://localhost:8080/`. If the port is already in use, Vue CLI automatically selects the next free port, for example `8081`.

Start only the frontend:

```bash
npm run serve
```

### Scripts

- `npm run dev`: starts the GraphQL server and Vue dev server together.
- `npm run serve`: starts only the Vue CLI dev server with hot reload.
- `npm run graphql`: starts the local GraphQL server from `scripts/graphql-server.js`.
- `npm run build`: creates the production build in `dist/`.
- `npm run lint`: checks Vue and JavaScript files with ESLint.

### Project Structure

```text
brutal-blog/
├── public/                 # Favicons, HTML entry point
├── scripts/                # Dev and GraphQL scripts
├── src/
│   ├── components/         # Atoms, Molecules, Organisms, Pages, Templates
│   ├── data/               # Local blog data
│   ├── functions/          # Small UI helpers
│   ├── router/             # Vue Router configuration
│   ├── App.vue             # App shell
│   ├── index.css           # Tailwind layers, tokens, global utilities
│   └── main.js             # App bootstrap, icons, router, motion
├── cypress/                # E2E tests
├── tailwind.config.js      # Tailwind theme extensions
├── vue.config.js           # Vue CLI + history fallback
└── package.json            # Scripts and dependencies
```

### Routing

Routes are defined in `src/router/index.js`:

- `/` home page
- `/photography` photography gallery
- `/blog` blog and project overview
- `/projects` redirect to `/blog`
- `/blogpost/:id` detail page for individual blog posts
- `/about` about page
- `/contact` contact page
- `/leistungen` services page
- `/video-call` video page
- `/login` login page

`vue.config.js` enables `historyApiFallback`, so direct requests such as `/blog` or `/blogpost/1` fall back to `index.html` in the dev server.

### Blog Logic

The blog pages are still historically named `BlogOverview_GraphQL.vue` and `BlogEntry_GraphQL.vue`, but currently use local data:

- `src/data/blogPreviews.js` for the blog overview
- `src/data/blogPostDetails.js` for detail pages and image series

The detail data is loaded through a dynamic import, which creates a separate blog details chunk during the build. Posts with `published: false` are hidden.

### Optional GraphQL Server

The local GraphQL server in `scripts/graphql-server.js` exposes the same session blog data through a simple API. It is currently optional and not the primary data source for the Vue blog pages.

Endpoint:

```text
http://127.0.0.1:8000/graphql
```

Supported queries:

```graphql
query {
  allPosts {
    id
    title
    author
    category
    publishDate
    imageUrl
    excerpt
  }
}
```

```graphql
query {
  postById(id: "1") {
    id
    title
    content
    imageUrls
  }
}
```

The server also serves local gallery images at `http://127.0.0.1:8000/project-images/...`.

### Photography Gallery

The Photography Gallery lives in:

```text
src/components/Organisms/PhotographyGallery/PhotographyGallery.vue
src/components/Pages/HomePage/PhotographyGallery/
```

Images are normalized to `photo_XXX.jpg`. The gallery uses `require.context` so Webpack can discover images in the root and subfolders.

Important folders:

- `PhotographyGallery/photo_001.jpg` through `photo_093.jpg` as the main gallery
- `PhotographyGallery/session-*` for blog and session images
- `PhotographyGallery/retro-*` for attached retro series
- `PhotographyGallery/aussortiert` as a preserved outtake selection

Some cover images open additional series in the modal:

- `photo_061.jpg` opens `retro-01-strecke`
- `photo_062.jpg` opens `retro-02-strecke`
- `photo_068.jpg` opens `retro-08-strecke`
- additional main images open the `session-*` series

The modal supports click navigation, arrow keys, and Escape.

### Styling and Tailwind

The project is configured so most styling is handled through Tailwind and a small set of central CSS rules.

Central files:

- `tailwind.config.js` extends colors, fonts, max widths, spacing, timing functions, and animations.
- `src/index.css` defines base tokens, theme variables, global layout helpers, and a few component classes.
- Vue components mostly use utility classes directly in their templates.

Important concepts:

- `--page-background`, `--text-color`, `--hero-navigation-color` as theme colors
- `page-shell`, `section-stack`, `split-grid`, `contact-grid` as layout helpers
- `chrome-reset` and `hero-tone` for navigation/footer/weather over the hero
- `motion-item` and `is-visible` for scroll animations
- dark/light theme through `document.documentElement.dataset.theme`

### App Logic

`src/main.js` initializes Vue, the router, Font Awesome icons, scroll direction, and IntersectionObserver-based motion classes.

`src/functions/heroTone.js` checks whether navigation, weather, and footer are currently over the home hero. When they are, `hero-tone` switches them to the matching color.

`WeatherModule.vue` loads current weather data for Rome through Open-Meteo:

```text
https://api.open-meteo.com/v1/forecast?latitude=41.89&longitude=12.51&current=temperature_2m,weather_code&timezone=Europe%2FRome
```

The clock is updated locally in the browser; the weather API is not queried every second.

### Packages

Runtime dependencies:

- `vue`, `vue-router`, `core-js`
- `@vue/cli`
- `@fortawesome/*`
- `@emailjs/browser`
- `axios`
- `graphql`
- `villus`

Development dependencies:

- `@vue/cli-service`, `@vue/cli-plugin-babel`, `@vue/cli-plugin-eslint`
- `@babel/core`, `@babel/eslint-parser`
- `eslint`, `eslint-plugin-vue`
- `postcss`, `autoprefixer`, `tailwindcss`
- `cypress`

### Tests

The app must be running before E2E tests:

```bash
npm run dev
```

Open Cypress:

```bash
npx cypress open
```

Run headless:

```bash
npx cypress run
```

Individual gallery tests:

```bash
npx cypress run --browser electron --spec cypress/e2e/gallery-sessions.cy.js --env BASE_URL=http://127.0.0.1:8081/
npx cypress run --browser electron --spec cypress/e2e/gallery-modal.cy.js --env BASE_URL=http://127.0.0.1:8081/
```

The URL must match the currently running Vue dev server.

### Build and Deployment

```bash
npm run build
```

The result is written to `dist/`. For static hosting, the server must be configured for Vue Router history mode: direct paths like `/blog`, `/about`, or `/blogpost/1` must fall back to `index.html`.

The build can show asset-size warnings because the gallery contains many large images. These warnings are not build errors, but point to possible performance optimization.

### Git

Remote:

```text
git@github.com:astrid-schindler/brutal-blog.git
```

Workflow:

```bash
git status
git add .
git commit -m "Describe your change"
git push origin master
```

Temporary working data such as `tmp/`, `node_modules/`, and `dist/` should not be part of normal commits.

---

## Documentation

- [Vue 3](https://vuejs.org/)
- [Vue CLI](https://cli.vuejs.org/)
- [Vue Router](https://router.vuejs.org/)
- [Tailwind CSS](https://tailwindcss.com/docs)
- [Cypress](https://docs.cypress.io/)
- [Open-Meteo](https://open-meteo.com/en/docs)
