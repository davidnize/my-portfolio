# David Nizeyimana — Personal Portfolio

A lightweight personal portfolio website built with React and Vite. The site presents David's interests in programming and technology, with a focus on software development, electronics, mathematics and physics.

## Overview

The portfolio is intentionally minimal and typography-focused. It includes:

- An introduction section
- A short About section
- Interests in software development, electronics, mathematics, physics and programming
- A technology list showing familiar and currently explored technologies
- A contact section with GitHub, LinkedIn, X, Instagram and email links
- Responsive layouts for desktop, tablet and mobile
- Subtle section entrance animations triggered as content enters the viewport
- Staggered list and contact-link animations
- Reduced-motion support for users who prefer less animation

## Technologies

- React
- React DOM
- Vite
- JavaScript
- CSS

The current technology list presented on the site includes:

- HTML
- CSS
- JavaScript
- Node.js
- Express.js
- React
- Go

## Getting started

### Requirements

- Node.js
- npm

### Installation

Clone the repository and install the dependencies:

```bash
git clone https://github.com/davidnize/my-portfolio.git
cd my-portfolio
npm install
```

### Development

Start the local development server:

```bash
npm run dev
```

Vite will provide a local URL in the terminal.

### Production build

Create a production build:

```bash
npm run build
```

Preview the production build locally:

```bash
npm run preview
```

## Project structure

```text
.
├── index.html
├── package.json
├── vite.config.js
└── src
    ├── App.jsx
    ├── main.jsx
    ├── styles.css
    └── components
        ├── SocialIcons.jsx
        └── SocialLinks.jsx
```

### Main files

- `src/App.jsx` — page sections, navigation, interests and technologies
- `src/styles.css` — layout, responsive styles, hover states and animations
- `src/components/SocialLinks.jsx` — reusable contact and social link list
- `src/components/SocialIcons.jsx` — inline SVG icons for each social link
- `src/main.jsx` — React application entry point

## Accessibility and interaction

- Semantic sections and navigation landmarks are used throughout the page.
- All contact links have readable text labels in addition to their icons.
- External links open in a new tab with `noopener noreferrer`.
- Keyboard focus styles are visible.
- The `prefers-reduced-motion` media query disables entrance and hover animations when requested.
- Section entrance animations use `IntersectionObserver` so content animates as it enters the viewport.

## Contact

- GitHub: <https://github.com/davidnize>
- LinkedIn: <https://www.linkedin.com/in/david-nizeyimana/>
- X: <https://x.com/_david_nize>
- Instagram: <https://www.instagram.com/david_nize>
- Email: <nizeyimanadavid61@gmail.com>
