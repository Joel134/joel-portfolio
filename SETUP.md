# Quick Setup Guide

## First Time Setup

### 1. Install Dependencies
```bash
npm install
```

### 2. Customize Content
Edit `public/content.json` with your information:
- Name, title, description
- GitHub, LinkedIn, Email URLs
- Project details
- Skills & experience
- Location

### 3. Run Locally
```bash
npm run dev
```
Visit `http://localhost:3000` (or the port shown in terminal)

### 4. Test Theme Toggle
Click the sun/moon icon in top-right corner to switch between dark and light modes.

### 5. Test All Pages
Use the navigation pills at top to switch between:
- Home (Hero)
- Work (Projects)
- Skills (Grid)
- Experience (Timeline)
- Contact (Links)

## Build for Production
```bash
npm run build
npm start
```

## Deploy to Vercel
```bash
npm i -g vercel
vercel
```
See `DEPLOYMENT.md` for detailed instructions.

## Project Structure
```
joel-portfolio/
├── app/
│   ├── globals.css          # Global styles
│   ├── layout.tsx           # Root layout
│   └── page.tsx             # Main page
├── components/
│   ├── Navigation.tsx       # Top nav pills
│   ├── ThemeToggle.tsx      # Dark/light toggle
│   ├── Footer.tsx           # Footer
│   └── pages/
│       ├── Home.tsx         # Hero section
│       ├── Work.tsx         # Projects grid
│       ├── Skills.tsx       # Skills with progress bars
│       ├── Experience.tsx   # Timeline
│       └── Contact.tsx      # Contact cards
├── public/
│   └── content.json         # All your data
├── package.json
├── tailwind.config.js       # Tailwind config
└── tsconfig.json
```

## Customization Tips

### Add Video to Phone Mockup
1. Upload your video somewhere (e.g., Cloudinary, YouTube)
2. Edit `public/content.json`:
```json
{
  "hero": {
    "videoUrl": "https://your-video-url.mp4"
  }
}
```

### Change Colors
Edit `tailwind.config.js`:
- `purple.primary`: Main accent color
- `teal.primary`: Secondary accent color
- `dark.bg`: Background color

### Change Fonts
Edit `tailwind.config.js` fontFamily and `app/layout.tsx` font imports.

### Add More Projects
Add to the `projects` array in `public/content.json`:
```json
{
  "id": "4",
  "name": "Your Project",
  "platform": "Platform",
  "description": "...",
  "featured": false,
  "tags": ["tag1", "tag2"],
  "link": "https://github.com/..."
}
```

## Troubleshooting

**Theme toggle not working?**
- Clear browser cache
- Hard refresh (Cmd+Shift+R on Mac, Ctrl+Shift+R on Windows)

**Content not updating?**
- Restart dev server: `npm run dev`
- Check that you saved `public/content.json`

**Build errors?**
- Run `npm install` again
- Delete `node_modules` and `.next` folder, then reinstall

**Dark mode looks weird in light mode?**
- Check that CSS variables are applying correctly
- The toggle switches `colorScheme` and background colors

## Next Steps

1. ✅ Customize `public/content.json` with your data
2. ✅ Test locally with `npm run dev`
3. ✅ Deploy to Vercel with `vercel`
4. ✅ Share your portfolio URL!
