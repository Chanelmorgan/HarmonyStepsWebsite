# Converting Harmony Steps from Create React App to Next.js

This guide explains how this codebase is converted to Next.js and how to run it.

## Summary of changes

| Current (CRA + React Router) | Next.js |
|-------------------------------|--------|
| `src/index.js` with `<Router><Switch><Route /></Switch></Router>` | File-based routing in `pages/` (no router in code) |
| `<Link to="...">` from `react-router-dom` | `<Link href="...">` from `next/link` |
| `<Helmet>` from `react-helmet` | `<Head>` from `next/head` in each page/view |
| `npm run start` (CRA dev server) | `npm run dev` (Next.js dev server) |
| `public/index.html` | Next.js generates HTML; `pages/_document.js` customizes it |
| Optional `api/submit-form.js` (Express) | `pages/api/submit-form.js` (Next.js API route) |

## Project structure after migration

```
HarmonyStepsWebsite/
├── pages/                    # Routes (new)
│   ├── _app.js               # Global layout, imports global CSS
│   ├── _document.js          # HTML shell, fonts
│   ├── index.js              # Home → /
│   ├── event-page.js
│   ├── classes-page.js
│   ├── contact-page.js
│   ├── coming-soon-page.js
│   ├── about-page.js
│   ├── gallery-page.js
│   ├── merch-page.js
│   ├── 404.js                # Not found
│   └── api/
│       └── submit-form.js     # API route (from api/submit-form.js)
├── src/
│   ├── components/           # Unchanged structure; Link/Head updated
│   ├── views/                # Unchanged; used by pages/
│   └── style.css             # Global styles (imported in _app.js)
├── public/                   # Static assets (favicon, images, etc.)
├── next.config.js
└── package.json              # next, remove react-scripts/craco/react-router-dom/react-helmet
```

## Step-by-step conversion (what was done)

### 1. Add Next.js and entry points

- **`next.config.js`** – Next config (e.g. optional image domains).
- **`pages/_app.js`** – Imports `../src/style.css`, wraps all pages with `<Component {...pageProps} />`.
- **`pages/_document.js`** – Custom `<Document>` to keep your fonts and any global `<head>` (replaces `public/index.html` for the shell).

### 2. One page per route

Each previous route becomes a file under `pages/`:

- `pages/index.js` → Home (imports `src/views/home.js`).
- `pages/event-page.js` → EventPage.
- `pages/classes-page.js` → ClassesPage.
- … same for contact, coming-soon, about, gallery, merch.
- `pages/404.js` → NotFound.

No `<Route>` or `<Switch>`; the URL path is the file path.

### 3. Replace React Router with Next.js navigation

- **Install:** Already using `next` (no `react-router-dom`).
- **In every component and view that used React Router:**
  - `import { Link } from 'react-router-dom'` → `import Link from 'next/link'`
  - `<Link to="/path">` → `<Link href="/path">`
- No `useHistory`/`useLocation` in this project; if you add them later, use Next’s `useRouter` from `next/router`.

### 4. Replace react-helmet with next/head

- **Remove:** `react-helmet`.
- **In each view (or page):**
  - `import { Helmet } from 'react-helmet'` → `import Head from 'next/head'`
  - `<Helmet><title>...</title></Helmet>` → `<Head><title>...</title></Head>`
  - Same for `<meta>`, `<link>`, etc.

### 5. Remove the old app entry and router

- **Delete or stop using:** `src/index.js` (the one that renders `<App />` with `<Router>` into `#app`).
- Next.js uses `pages/_app.js` as the app entry; it receives the active page as `Component`/`pageProps`.

### 6. API route

- **Move:** `api/submit-form.js` → `pages/api/submit-form.js`.
- Next.js will expose it at `/api/submit-form`. If the contact form currently posts to Formspree from the client, you can either keep that or switch the form to POST to `/api/submit-form` and let the API route forward to Formspree (as in your current `api/submit-form.js`).

### 7. package.json

- **Add:** `"next": "^14.x"` (or latest 14).
- **Remove:** `react-scripts`, `@craco/craco`, `react-router-dom`, `react-helmet`.
- **Scripts:**
  - `"dev": "next dev"`
  - `"build": "next build"`
  - `"start": "next start"`
- **Keep:** `react`, `react-dom`, `prop-types`, `react-icons`, etc. Use React 18 with Next 14 if possible.

### 8. Static assets and images

- Keep using `public/` for static files; Next serves them from the root (e.g. `/image.png`).
- Optionally use `next/image` and put images in `public/` for better optimization.

### 9. Cleanup (after everything works)

- Remove `craco.config.js`, `src/index.js`.
- You can keep `public/index.html` for reference or remove it; Next ignores it at runtime.
- Remove any remaining dependencies that were only for CRA/React Router/Helmet.

## Running the app after migration

Install dependencies (this will install Next.js and remove the need for CRA/craco/react-router-dom/react-helmet):

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000). Build for production:

```bash
npm run build
npm run start
```

## Optional: cleaner URLs

If you want paths without `-page` (e.g. `/contact` instead of `/contact-page`):

- Add `pages/contact.js` that renders the same view.
- Use Next.js redirects in `next.config.js` to send `/contact-page` → `/contact`, so old links still work.

## Summary

- **Routing:** File-based in `pages/`; no React Router.
- **Links:** `next/link` with `href` instead of `to`.
- **Head:** `next/head` instead of `react-helmet`.
- **API:** `pages/api/submit-form.js` for the contact form backend.
- **Styles:** All global CSS (including former component/view CSS) is imported in `pages/_app.js`. Next.js only allows global CSS from `_app.js`, so the per-file `import './*.css'` lines were removed from components and views.

After these steps, the site runs as a Next.js app with the same pages and behavior as before.

## Optional cleanup after switching to Next

- Remove or archive `src/index.js` (the old CRA entry that mounted the app with React Router).
- Remove `craco.config.js` and any CRA-specific config; Next uses `next.config.js`.
- The contact form currently posts to Formspree from the client; to use your API route instead, point the form’s `action` or `fetch` URL to `/api/submit-form`.
