# Deployment Guide

## Deploy to Vercel (Recommended)

### Option 1: Using Vercel CLI

1. Install Vercel CLI (if not already installed):
```bash
npm i -g vercel
```

2. Login to Vercel:
```bash
vercel login
```

3. Deploy from the project directory:
```bash
cd /root/.openclaw/workspace/joel-portfolio
vercel
```

4. Follow the prompts:
   - Confirm project name (default: joel-portfolio)
   - Set production environment
   - Verify build settings (should auto-detect Next.js)

### Option 2: Connect GitHub Repository

1. Push code to GitHub:
```bash
git remote add origin https://github.com/YOUR_USERNAME/joel-portfolio.git
git branch -M main
git push -u origin main
```

2. Go to [vercel.com](https://vercel.com)
3. Click "New Project"
4. Select your GitHub repository
5. Click "Deploy"

Vercel will automatically:
- Detect Next.js
- Configure build settings
- Deploy to production
- Provide a live URL

## Environment Variables

None required for basic deployment. If you add backend APIs later:

1. Go to Vercel Dashboard → Project Settings → Environment Variables
2. Add your variables (e.g., `NEXT_PUBLIC_API_URL`)
3. Redeploy

## Custom Domain

1. Vercel Dashboard → Project Settings → Domains
2. Add your custom domain
3. Follow DNS configuration instructions
4. DNS changes take 24-48 hours to propagate

## Customization Before Deploying

Edit `public/content.json` with:
- Your real GitHub URL
- Your LinkedIn URL
- Your email
- Project descriptions & links
- Skills & percentages
- Experience history

## Post-Deployment

After deploying, you can:
- Visit your live URL
- Test theme toggle (dark/light mode)
- Click through all sections
- Verify links work

## Redeploy After Changes

Any changes pushed to `main` branch will auto-redeploy on Vercel (if using GitHub).

Or manually redeploy:
```bash
vercel --prod
```

## Support

- Vercel Docs: https://vercel.com/docs
- Next.js Docs: https://nextjs.org/docs
- Report issues: Check project README.md
