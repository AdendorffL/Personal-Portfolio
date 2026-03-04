# Lourens Adendorff — Personal Portfolio

A personal portfolio website built from scratch with vanilla HTML, CSS, and JavaScript. No frameworks, no build tools — just clean, structured code that ages well.

Live at: **https://adendorffl.github.io/Portfolio/**

---

## About

This portfolio was designed and built entirely by hand to reflect the same values I bring to backend development — clarity over cleverness, structure over shortcuts, and no unnecessary dependencies. Every visual element, from the layout to the animated SVG backgrounds, was crafted intentionally.

---

## Features

- **Bento-style About section** with bio, live status indicator, location, current focus stack, and a hand-written `profile.js` code card
- **Animated SVG backgrounds** — both the meditation circle and moonsign circle were hand-crafted SVGs, designed and animated from scratch specifically for this site
- **Dynamic project cards** — rendered from a JavaScript data object, with optional live demo links
- **Scroll-based nav highlighting** — active section tracked via IntersectionObserver
- **Responsive navigation** — floating pill on desktop, full-width hamburger drawer on mobile
- **Grain overlay** — subtle SVG feTurbulence noise texture for a warm, analogue feel
- **No external JS dependencies** — everything is vanilla

---

## Tech Stack

| Layer | Tech |
|---|---|
| Structure | HTML5 |
| Styling | CSS3 (custom properties, grid, flexbox) |
| Logic | Vanilla JavaScript (ES6+) |
| Icons | Devicons CDN |
| Fonts | Funnel Sans via Google Fonts |

---

## Project Structure

```
portfolio/
├── index.html
├── README.md
├── LICENSE
├── assets/
|   ├── CV/
|   |   └── Lourens_Adendorff_CV.pdf
│   ├── icons/
│   │   ├── tab-icon.svg
│   │   ├── download.svg
│   │   ├── scroll-down.svg
│   │   ├── gmail.svg
│   │   └── whatsapp.svg
│   └── images/
│       ├── projects/
│       │   ├── console-contact-book.png
│       │   ├── smartgear.png
│       │   └── portfolio.png
│       └── svgs/
│           ├── meditation-circle.svg
│           └── moonsign-circle.svg
|
├── styles/
│   ├── reset.css
│   ├── theme.css
│   └── main.css
└── js/
    ├── main.js
    ├── scroll.js
    ├── circle-injector.js
    └── nav.js
```

---

## File Responsibilities

**`styles/reset.css`**
A modern CSS reset — normalises box-sizing, removes default margins, improves text rendering, and sets sensible media defaults.

**`styles/theme.css`**
All design tokens as CSS custom properties — colours, gradients, surfaces, transition speeds, and the grain overlay on `body::before`. Change the theme here without touching layout code.

**`styles/main.css`**
All layout and component styles — nav, hero, about bento grid, skills, projects, contact, and responsive breakpoints.

**`js/main.js`**
Holds the project data object and renders project cards dynamically into `#project-container`. To add a new project, add an entry to the `projects` object — set `live` to a URL string for a live demo button, or `null` for GitHub only.

**`js/scroll.js`**
Tracks which section is in view via IntersectionObserver and updates the active nav item accordingly. Also hides the scroll indicator arrow once the user starts scrolling.

**`js/circle-injector.js`**
Fetches the two hand-crafted SVG animation files and injects them inline into their hero section containers. Inline injection is required so the SVG animations run correctly — external `<img>` tags suppress SVG animation.

**`js/nav.js`**
Handles the mobile hamburger menu — toggles the nav drawer, animates the hamburger into an X, and closes the drawer automatically when a nav link is clicked.

---

## Running Locally

No build step required. Because `circle-injector.js` uses `fetch()` to load the SVGs, the site must be served over HTTP — browsers block `fetch()` on `file://` URLs.

```bash
# Node.js
npx serve .

# Python
python -m http.server 8080
```

Then open `http://localhost:8080` in your browser.

---

## Customisation

**Adding a project**

Open `js/main.js` and add a new entry to the `projects` object:

```javascript
project4: {
    title: "Your Project Title",
    description: "A short description of what it does.",
    github: "https://github.com/your-repo",
    image: "./assets/images/projects/your-image.png",
    stack: ["Node.js", "SQL Server"],
    live: "https://your-live-url.com" // or null
}
```

**Changing the colour scheme**

All colours are CSS custom properties in `styles/theme.css`. The key values to change are `--bg-primary`, `--bg-secondary`, `--accent-primary`, and `--accent-secondary`.

**Adjusting grain intensity**

In `styles/theme.css`, find `body::before` and adjust the `opacity` value. `0.038` is the current subtle level — push toward `0.06` for more texture, lower toward `0.02` for almost none.

---

## SVG Animations

Both hero background animations are original hand-crafted SVGs:

- **Meditation Circle** — inspired by the meditation mechanic in Star Wars Jedi: Fallen Order
- **Moonsign Circle** — inspired by the Moon-sign sigil from Genshin Impact

Both were designed and animated entirely from scratch using SVG `animateTransform` and `animate` elements — no JavaScript, no animation libraries.

---

## Acknowledgements

- [Devicons](https://devicon.dev/) for the tech stack icons
- [Google Fonts](https://fonts.google.com/) for Funnel Sans
- [Josh Comeau's CSS Reset](https://www.joshwcomeau.com/css/custom-css-reset/) as the base for `reset.css`

---

## License

This project is licensed under the [MIT License](LICENSE) — feel free to use the code as a base for your own portfolio.
