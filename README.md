# Sadia Rakhi — Developer Portfolio

A personal portfolio website built with plain **HTML, CSS and JavaScript**. It needs no framework, no build step and no server, so it works on GitHub Pages, Netlify, Render static sites or any web host.

## Folder structure

```
portfolio/
├── index.html          Page structure (sections and navigation)
├── cv.html             Printable CV, built from the same data
├── css/
│   └── style.css       All design: colours, fonts, layout, animations
├── js/
│   ├── data.js         ★ YOUR CONTENT — edit this file to update the site
│   └── main.js         Builds the page from data.js (no need to edit)
└── assets/
    ├── img/            Project screenshots and favicon
    └── cv/
        └── Sadia_Rakhi_CV.pdf   The file behind every "Download CV" button
```

## How to update your information

Open **`js/data.js`** in VS Code. Every part of the site comes from this one file, and each section has a comment explaining it:

| What you want to change | Where in `data.js` |
|---|---|
| Name, title, rotating roles, introduction, About text | `personal` |
| Profile photo | `personal.photo` — put the image in `assets/img/` and write its path, e.g. `"assets/img/profile.jpg"` |
| Email, phone, GitHub, LinkedIn, CV file | `contact` (leave a value as `""` to hide it) |
| The four numbers in the hero | `stats` |
| Skills | `skills` — add or remove items in each `items: [...]` list |
| Projects, features, technologies, links, screenshots | `projects` |
| Degree, status, expected completion | `education` |
| Section headings | `sections` |

After you graduate, for example, change in `education`:

```js
status: "Completed",
period: "2022 – 2026",
```

Save the file and refresh the browser: the design stays the same.

### Adding a screenshot to CareLink

1. Save a screenshot as `assets/img/carelink-home.jpg`.
2. In `data.js`, in the CareLink project, change `images: []` to:
   ```js
   images: [{ src: "assets/img/carelink-home.jpg", caption: "Home page" }],
   ```

### Changing colours or fonts

Open `css/style.css` and edit the variables at the top (`--gold`, `--indigo`, `--ink`, `--font-head`, ...).

## Updating the CV

The CV PDF was generated from `cv.html`, which reads the same `data.js`.

1. Open `cv.html` in Chrome or Edge.
2. Press **Ctrl + P** → **Save as PDF** → paper **A4**.
3. Save it as `assets/cv/Sadia_Rakhi_CV.pdf`, replacing the old file.

You can also replace that PDF with any CV you made yourself — keep the same file name, or change `contact.cv` in `data.js`.

## Viewing the site on your computer

Double-click `index.html`, or in VS Code right-click it → **Open with Live Server**.

## Publishing free on GitHub Pages

1. Create a new **public** repository on GitHub, for example `portfolio` (do not use your Vendora or CareLink repositories).
2. Upload all files of this folder (keep the folder structure), or from a terminal inside the folder:
   ```
   git init
   git add .
   git commit -m "Portfolio website"
   git branch -M main
   git remote add origin https://github.com/sadiarakhi/portfolio.git
   git push -u origin main
   ```
3. On GitHub: **Settings → Pages → Branch: main / root → Save**.
4. After a minute the site is live at `https://sadiarakhi.github.io/portfolio/`.

Tip: if you name the repository `sadiarakhi.github.io`, the address becomes `https://sadiarakhi.github.io/`.

## Notes

- The contact form opens the visitor's email app with the message filled in, so it needs no server.
- Fonts (Inter and Plus Jakarta Sans) load from Google Fonts; without internet the site falls back to system fonts.
- Animations are turned off automatically for visitors who prefer reduced motion.
