# Portfolio

A minimal, dependency-free personal portfolio site. Plain HTML, CSS, and vanilla JavaScript — no build step, no framework, no npm.

## Structure

```
portfolio/
├── index.html    # markup + empty section containers, no hardcoded content
├── styles.css    # all styling, light/dark theme
├── script.js     # renders content.js into the DOM, handles nav/theme/scroll behavior
├── content.js    # all site text and data — edit this file to update the site
└── README.md
```

## Editing content

Everything you see on the page — name, bio, projects, links, etc. — comes from `content.js`. Open it and edit the `window.SITE_CONTENT` object directly. No other file needs to change for a content update.

Fields marked `REPLACE_ME` or `[PLACEHOLDER]` are stand-ins for information not yet provided (real profile URLs, the contact email to publish, career vision text, clinical experience entries, roadmap milestones, and the "in preparation" publication). Fill those in before treating the site as final.

## Local preview

No server or build step required — just open the file:

```bash
open index.html
```

(or double-click `index.html` in Finder). Since `content.js` and `script.js` are loaded as plain `<script src>` tags (not ES modules), this works directly over `file://` with no CORS issues.

If you prefer a local server (optional, e.g. to test with a URL rather than `file://`):

```bash
python3 -m http.server 8000
```

then visit `http://localhost:8000`.

## Deploying to GitHub Pages

1. Push this directory to a GitHub repository (as the repo root, or a folder in the repo).
2. In the repo, go to **Settings → Pages**.
3. Under **Build and deployment**, set **Source** to "Deploy from a branch".
4. Choose the branch (e.g. `main`) and the folder (`/root` if these files are at the repo root).
5. Save. GitHub will publish the site at `https://<username>.github.io/<repo>/` within a minute or two.

No build configuration, Actions workflow, or Jekyll setup is needed — these are static files served as-is.

### Optional: set the canonical URL

Once you know the live URL, add it to `content.js` as `meta.siteUrl` (used for the Open Graph `og:url` tag) and `meta.ogImage` if you add a social preview image.
