# Brutal Blog

Brutal Blog ist ein Vue-3-Projekt auf Basis von Vue CLI. Das Projekt kombiniert eine blogartige Seitenstruktur mit Portfolio-, Kontakt-, Galerie- und Service-Seiten. Das Styling läuft über Tailwind CSS, Routing über Vue Router und die Blogdaten können über ein lokales GraphQL-Backend geladen werden.

## Tech Stack

- Vue 3
- Vue CLI 5
- Vue Router 4
- Tailwind CSS 3
- Villus als GraphQL-Client
- Font Awesome, Headless UI, Flowbite und AOS für UI-Elemente und Animationen
- Cypress für End-to-End-Tests

## Voraussetzungen

Installiere vor dem Start:

- Node.js
- npm
- Git

Empfohlen ist eine aktuelle Node-LTS-Version. Prüfen kannst du deine Installation mit:

```bash
node --version
npm --version
git --version
```

## Installation

Repository klonen:

```bash
git clone git@github.com:astrid-schindler/brutal-blog.git
cd brutal-blog
```

Abhängigkeiten installieren:

```bash
npm install
```

## Entwicklung starten

Lokalen Entwicklungsserver starten:

```bash
npm run serve
```

Die Anwendung ist danach normalerweise unter dieser Adresse erreichbar:

```text
http://localhost:8080
```

Falls Port `8080` bereits belegt ist, zeigt Vue CLI im Terminal eine andere lokale URL an.

## Verfügbare Scripts

```bash
npm run serve
```

Startet den Entwicklungsserver mit Hot Reload.

```bash
npm run build
```

Erstellt den Produktions-Build im Ordner `dist/`.

```bash
npm run lint
```

Prüft und korrigiert JavaScript- und Vue-Dateien mit ESLint.

## GraphQL-Backend

Die Blog-Ansichten `BlogOverview_GraphQL.vue` und `BlogEntry_GraphQL.vue` erwarten ein GraphQL-Backend unter:

```text
http://localhost:8000/graphql
```

Der GraphQL-Client wird in `src/App.vue` konfiguriert. Die Anwendung fragt unter anderem folgende Daten ab:

- `allPosts` für die Blog-Übersicht
- `postById(id)` für einzelne Blogbeiträge

Eine einfache Abfrage für alle Blogbeiträge:

```graphql
query {
  allPosts {
    id
    title
    author
    publishDate
  }
}
```

Eine einfache Abfrage für einen einzelnen Blogbeitrag:

```graphql
query {
  postById(id: "1") {
    id
    title
    content
  }
}
```

Wenn kein Backend unter `localhost:8000/graphql` läuft, können die GraphQL-basierten Blogseiten keine Beiträge laden. Für statische Testdaten gibt es zusätzlich `src/data/blogEntries.json` und ältere nicht-GraphQL-Komponenten im Projekt.

## Projektstruktur

```text
brutal-blog/
├── public/                 # Statische Dateien und HTML-Einstiegspunkt
├── src/
│   ├── components/
│   │   ├── Atoms/          # Kleine Basiskomponenten
│   │   ├── Molecules/      # Zusammengesetzte UI-Komponenten
│   │   ├── Organisms/      # Groessere Seitenbereiche
│   │   ├── Pages/          # Routenseiten
│   │   └── Templates/      # Layout-Templates
│   ├── data/               # Lokale Beispiel- und Fallback-Daten
│   ├── functions/          # Gemeinsame Hilfsfunktionen
│   ├── router/             # Vue-Router-Konfiguration
│   ├── App.vue             # App-Shell und GraphQL-Client
│   ├── index.css           # Globale Styles und Tailwind-Layer
│   └── main.js             # Vue-App, Plugins, Icons und Animation Setup
├── cypress/                # Cypress E2E-Teststruktur
├── tailwind.config.js      # Tailwind-Konfiguration
├── vue.config.js           # Vue-CLI-Konfiguration
└── package.json            # Scripts und Abhängigkeiten
```

## Routing

Die Routen werden in `src/router/index.js` definiert:

- `/` Startseite
- `/blog` Blog- beziehungsweise Projektübersicht
- `/blogpost/:id` Detailseite für einzelne Beiträge
- `/about` Über-mich-Seite
- `/contact` Kontaktseite
- `/leistungen` Leistungen
- `/video-call` Videoseite
- `/login` Login-Seite

## Styling und Komponenten

Das Projekt verwendet eine Atomic-Design-Struktur:

- `Atoms` enthalten kleine UI-Bausteine wie Buttons oder Headlines.
- `Molecules` kombinieren mehrere Atoms zu wiederverwendbaren Modulen.
- `Organisms` bilden groessere Seitenbereiche wie Navigation, Hero oder Galerie.
- `Pages` enthalten komplette Ansichten für einzelne Routen.
- `Templates` definieren wiederverwendbare Layout-Strukturen.

Globale Styles liegen in `src/index.css`. Tailwind Utility-Klassen werden direkt in den Vue-Komponenten verwendet.

## Tests

Cypress ist im Projekt installiert und unter `cypress/` vorbereitet. Für End-to-End-Tests muss die Anwendung lokal laufen:

```bash
npm run serve
```

Danach können Cypress-Tests über ein passendes Cypress-Kommando ausgeführt werden. Falls noch kein Script ergänzt wurde, kann Cypress direkt über npm gestartet werden:

```bash
npx cypress open
```

oder im Headless-Modus:

```bash
npx cypress run
```

## Produktions-Build

Build erstellen:

```bash
npm run build
```

Das Ergebnis liegt im Ordner `dist/`. Dieser Ordner kann anschließend auf einem statischen Hosting-Anbieter oder einem Webserver deployed werden. Bei Deployments mit Vue Router im History-Modus muss der Server so konfiguriert sein, dass direkte Aufrufe wie `/blogpost/1` auf `index.html` zurückfallen.

## Git Workflow

Aktuellen Status prüfen:

```bash
git status
```

Änderungen committen:

```bash
git add .
git commit -m "Describe your change"
```

Branch pushen:

```bash
git push
```

Wenn ein neuer Branch zum ersten Mal gepusht wird:

```bash
git push -u origin branch-name
```

## Hinweise zur Konfiguration

- Die GitHub-Remote kann per SSH gesetzt werden:

```bash
git remote set-url origin git@github.com:astrid-schindler/brutal-blog.git
```

- Die Vue-CLI-Konfiguration liegt in `vue.config.js`.
- Tailwind wird über `tailwind.config.js` und `postcss.config.js` eingebunden.
- Browser-Kompatibilität wird über `browserslist` in `package.json` gesteuert.

## Weiterführende Dokumentation

- [Vue CLI Configuration Reference](https://cli.vuejs.org/config/)
- [Vue 3 Documentation](https://vuejs.org/)
- [Vue Router Documentation](https://router.vuejs.org/)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
