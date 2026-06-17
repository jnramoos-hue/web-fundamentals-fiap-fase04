# Phase 04 — Front-end, Web, Tailwind, JavaScript and GitHub

This repository contains the studies and exercises developed during **Phase 04 of the Systems Analysis and Development program at FIAP**, focused on Front-end development, web page structure, CSS/Tailwind CSS styling, responsive layouts, file organization best practices, and Git/GitHub version control.

> Academic project in progress, used to consolidate Front-end fundamentals and turn college exercises into practical portfolio deliverables.

---

## Phase 04 Objective

Phase 04 aims to build a practical foundation in **Front-end Web Development**, from HTML and CSS fundamentals to more organized, responsive interfaces prepared for real-world projects.

The studies in this phase are connected to the development of interfaces for applications such as a **Fintech**, with focus on:

- web page structure;
- visual content organization;
- menus and navigation;
- layouts with Flexbox and CSS Grid;
- styling with Tailwind CSS;
- responsiveness;
- forms;
- JavaScript in the browser;
- Git and GitHub integration.

---

## Technologies and tools used

- **HTML5**
- **CSS3**
- **JavaScript**
- **Tailwind CSS**
- **Node.js**
- **npm**
- **Git**
- **GitHub**
- **WebStorm**
- **macOS Sequoia**

---

## Topics studied

### HTML5

- Basic HTML document structure
- Semantic tags
- Links
- Images
- Lists
- Forms
- Page organization
- Separation between structure, style, and behavior

### CSS3

- Selectors
- Classes and IDs
- Box Model
- Colors and typography
- Margin, padding, and borders
- Reset/normalize CSS
- Layout with Flexbox
- Layout with CSS Grid
- Responsive design with media queries

### Tailwind CSS

- Installation through **Tailwind CLI**
- Utility-first classes
- Colors
- Typography
- Spacing
- Containers
- Flexbox with Tailwind
- Grid with Tailwind
- Hover and transitions
- Mobile-first responsiveness
- Converting traditional CSS into Tailwind utility classes

### JavaScript

- Basic DOM manipulation
- Scripts in web pages
- Events
- Visual interactions
- Floating buttons
- Basic validation
- Complementary interface features

### Git and GitHub

- Exercise version control
- Organized commits
- Use of `.gitignore`
- Protection of the `node_modules` folder
- Publishing to GitHub
- Organizing study history

---

## Project structure

```text
web-fundamentals-fiap-fase04/
├── cap06/
│   ├── css/
│   │   └── styles.css
│   └── pages/
│       └── index.html
│
├── capt07/
│   ├── dist/
│   │   ├── css/
│   │   │   └── styles.css
│   │   ├── img/
│   │   ├── js/
│   │   └── index.html
│   │
│   ├── src/
│   │   └── input.css
│   │
│   ├── package.json
│   └── package-lock.json
│
├── .gitignore
└── README.md
```

> Note: the `node_modules/` folder must not be pushed to GitHub. It can be recreated automatically with `npm install`.

---

## Tailwind CSS setup

Tailwind CSS was installed using the **Tailwind CLI** approach.

### Installation command

```bash
npm install tailwindcss @tailwindcss/cli
```

### Input file

```text
capt07/src/input.css
```

Content:

```css
@import "tailwindcss";
```

### Build script

In `capt07/package.json`, the main script is:

```json
"scripts": {
  "build": "npx @tailwindcss/cli -i ./src/input.css -o ./dist/css/styles.css --watch"
}
```

### How to run

```bash
cd capt07
npm run build
```

While the command is running, Tailwind watches the HTML changes and automatically updates the generated CSS file.

---

## How to view the exercises

After running the Tailwind build process, open the HTML file in the browser:

```text
capt07/dist/index.html
```

In WebStorm, you can also right-click the `index.html` file and select **Open in Browser**.

---

## Practical project: FinanNews

During this phase, a page called **FinanNews** was developed, focused on financial education and financial market content.

The project proposal is to create a financial portal interface with:

- header with logo and navigation menu;
- sidebar with quick learning links;
- featured main content;
- latest news section;
- footer;
- responsive layout;
- styling migrated from traditional CSS to Tailwind CSS.

This project works as a foundation for future interfaces related to the **Fintech project**, especially screens such as financial dashboards, educational content pages, financial news cards, and sidebars with financial tools.

---

## Applied concept examples

### Menu aligned with Flexbox/Tailwind

```html
<header class="flex items-center justify-between">
  <h1 class="text-3xl font-light text-[#315e8a]">FINANNEWS</h1>

  <nav>
    <ul class="flex items-center justify-end gap-5">
      <li><a href="index.html">Home</a></li>
      <li><a href="artigos.html">Articles</a></li>
      <li><a href="conteudos.html">Content</a></li>
      <li><a href="sobre.html">About</a></li>
      <li><a href="contato.html">Contact</a></li>
    </ul>
  </nav>
</header>
```

### Layout with sidebar and main content

```html
<section class="grid grid-cols-1 gap-5 md:grid-cols-[240px_1fr]">
  <aside class="rounded-lg bg-white p-5 shadow-md">
    Sidebar content
  </aside>

  <section>
    Main content
  </section>
</section>
```

---

## Key learnings

- Understanding how HTML structures page content.
- Applying traditional CSS to understand visual foundations.
- Migrating traditional styles to Tailwind utility classes.
- Using Flexbox to align menus, logos, and components.
- Using CSS Grid to create layouts with sidebars and main content.
- Working with responsiveness using prefixes such as `md:` and `max-md:`.
- Using Git and GitHub to version study progress.
- Organizing academic exercises as portfolio material.

---

## Best practices adopted

- Separation between source files and final files.
- Use of `.gitignore` to avoid versioning `node_modules/`.
- Descriptive commit messages.
- Folder structure organized by chapter.
- Code comments to support learning.
- Progressive use of Tailwind without losing understanding of traditional CSS.

---

## Project status

Academic project in progress.

- [x] Initial Git/GitHub setup
- [x] Flexbox exercises
- [x] Grid exercises
- [x] Tailwind CLI installation
- [x] npm build setup
- [x] First tests with Tailwind classes
- [x] Initial conversion from traditional CSS to Tailwind
- [ ] Responsiveness improvements
- [ ] Visual component refactoring
- [ ] Application of concepts in Fintech screens
- [ ] Final documentation of chapters

---

## Next steps

- Finish the Tailwind CSS chapter exercises.
- Create responsive versions of the layouts.
- Improve the visual organization of the FinanNews project.
- Apply the learnings to the Fintech project.
- Create a specific README for each relevant project.
- Publish updates to GitHub with organized commits.
- Turn exercises into small portfolio case studies.

---

## Author

**Jose da Silva Ramos Junior**  
Systems Analysis and Development Student — FIAP  
Career transition into technology, focused on Front-end, Web Development, Databases, Systems, and practical portfolio projects.

---

## Note

This repository is part of an academic journey in progress. The goal is not only to deliver exercises, but to build a solid technical foundation and transform learning into real projects for GitHub, LinkedIn, résumé, and the job market.
