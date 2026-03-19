# Joel's Portfolio — Mobile Developer & Fintech Engineer

A modern, responsive portfolio website built with Next.js, Tailwind CSS, and TypeScript.

**Live:** [Deploy to Vercel](#deployment)

## Features

- 🎨 **Dark theme** with purple & teal accents
- 📱 **Fully responsive** — mobile to desktop
- ⚡ **Single-page app** — smooth navigation between sections
- 🌙 **Dark/Light mode toggle** with system preference detection
- ✨ **Smooth animations** — fade transitions, hover effects, pulsing elements
- 📦 **Next.js 14** with App Router
- 🎯 **TypeScript** for type safety
- 💅 **Tailwind CSS** for styling

## Sections

1. **Home** — Hero with gradient text, status pill, CTA buttons, stats, phone mockup
2. **Work** — Featured projects with asymmetric grid layout
3. **Skills** — Mobile & Backend skills with progress bars
4. **Experience** — Timeline layout with role, company, description
5. **Contact** — Contact card stack with social links
6. **Footer** — Attribution

## Getting Started

### Prerequisites
- Node.js 18+
- npm or yarn

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Production Build

```bash
npm run build
npm start
```

## Customization

### Update Personal Info
Edit the following files:
- `components/pages/Home.tsx` — Name, title, description, stats
- `components/pages/Work.tsx` — Projects and links
- `components/pages/Skills.tsx` — Skills and proficiency
- `components/pages/Experience.tsx` — Work experience
- `components/pages/Contact.tsx` — Contact links

### Colors
Tailwind colors defined in `tailwind.config.js`:
- Dark bg: `#080810`
- Purple accent: `#534AB7` / `#9F77DD`
- Teal accent: `#1D9E75`

## Deployment

### Deploy to Vercel

```bash
npm install -g vercel
vercel
```

Follow the prompts to deploy.

### Environment Variables

None required for basic deployment. Add to `.env.local` if needed later.

## Tech Stack

- **Framework:** Next.js 14
- **Styling:** Tailwind CSS
- **Language:** TypeScript
- **Icons:** Lucide React
- **Animations:** CSS + Framer Motion ready
- **Deployment:** Vercel

## License

Personal portfolio — feel free to fork and customize for your own use.
