# Site V3 — Mono Academic

Personal academic landing page for Nikita Kotelevskii.
Static files only — no build step required.

## Quick start

Open `index.html` directly in any browser. No server or npm needed.

---

## How to: add a publication

Edit `data.js`. Copy the example block at the top of `PUBLICATIONS` and fill in your details:

```js
// In data.js — PUBLICATIONS array
{
  title: "My New Paper Title",
  authors: "A. Author, **N. Kotelevskii**, B. Coauthor.",  // wrap your name in ** for bold
  venue: "Conference on My Topic (CONF)",
  year: 2026,
  url: "https://link-to-paper.com"
},
```

Paste it as the **first** item in the array (publications render newest-first).
Save the file — reload the browser. Done.

---

## How to: change the profile photo

Replace `assets/profile.png` with a new image file of the same name.
Any standard image format (PNG, JPG, WebP) works.
The photo is displayed at 180 px wide; source image should be at least 360 px wide for crisp display on retina screens.

---

## How to: add a course

Edit `data.js`. Copy the example block inside the `COURSES` array:

```js
// In data.js — COURSES array
{
  title: "My New Course",
  description: "A short description of what the course covers."
},
```

Paste it wherever you want it to appear in the teaching list and save.

---

## How to: update links (email, GitHub)

Open `index.html` and find the `<footer class="links-footer">` section near the bottom.
Replace the placeholder values:

- `mailto:you@example.com` → your real email address
- `https://github.com/your-handle` → your GitHub profile URL
- The link text beside each `<span class="link-label">` can also be updated.

---

## How to: deploy to GitHub Pages

1. Create a new repository on GitHub (e.g. `yourusername.github.io` for a user page,
   or any repo name for a project page).
2. Push all files in this directory to the `main` (or `gh-pages`) branch:
   ```bash
   git init
   git add .
   git commit -m "initial site"
   git remote add origin https://github.com/yourusername/your-repo.git
   git push -u origin main
   ```
3. In the repository Settings → Pages, set Source to `main` branch, root folder `/`.
4. GitHub Pages will serve your site — the `.nojekyll` file in this directory
   tells GitHub not to process the files through Jekyll.

Your site will be live at `https://yourusername.github.io/your-repo/` within a minute or two.

---

## File structure

```
site-v3/
  index.html      — page structure & markup
  styles.css      — all styling (light/dark themes, typography, layout)
  script.js       — renders publications & courses; handles theme toggle
  data.js         — YOUR DATA: edit this to add publications and courses
  assets/
    profile.png   — profile photo (replace to change photo)
  README.md       — this file
  .nojekyll       — prevents Jekyll processing on GitHub Pages
```
