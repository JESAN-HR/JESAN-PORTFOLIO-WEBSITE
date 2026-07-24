# Khairul Haque — Portfolio Website

A personal portfolio website built with React, TypeScript, and Tailwind CSS. Features smooth animations, dark mode support, and a fully responsive layout.

## Tech Stack

- **React 18** + **TypeScript**
- **Vite** — build tool and dev server
- **Tailwind CSS** — utility-first styling
- **Framer Motion** — animations
- **Lucide React** — icons

## Features

- Dark / light theme toggle
- Animated hero, floating elements, and infinite scroll marquee
- Sections: Hero, About, Experience, Projects, Contact
- Project showcase with demo and GitHub links
- Downloadable CV
- Fully responsive design

## Getting Started

```bash
# Install dependencies
npm install

# Start the development server
npm run dev

# Build for production
npm run build

# Preview the production build
npm run preview
```

## Project Structure

```
src/
├── components/       # All page sections and UI components
│   ├── Header.tsx
│   ├── Hero.tsx
│   ├── About.tsx
│   ├── Experience.tsx
│   ├── Projects.tsx
│   ├── Contact.tsx
│   ├── Footer.tsx
│   ├── FloatingElements.tsx
│   ├── InfiniteScroll.tsx
│   └── ThemeProvider.tsx
├── projects/
│   └── projects.ts   # Project data
├── App.tsx
├── main.tsx
└── index.css
public/
├── images/           # Project screenshots
└── M M Khairul Haque_CV_2025.pdf
```

## Highlighted Projects

| Project | Stack | Live |
|---|---|---|
| CaptionCraft AI | Next.js, Firebase, Stripe | [Demo](https://captioncraftai-ten.vercel.app/) |
| Quick Split Together | React, TypeScript, Firebase | [Demo](https://quick-split-together.vercel.app) |
| Task Manager | Vanilla JS, Tailwind CSS | [Demo](https://task-manager-theta-ten-72.vercel.app/) |
| Pyonet Agency | Next.js, Shadcn UI | [Demo](https://pyonet-next.vercel.app/) |
| Movie API App | React, REST API | [Demo](https://api-project-movie-app.vercel.app/) |

## License

This project is for personal use and portfolio display purposes.
