# Deployment Guide

Deploy your VelocityDocs to production with confidence.

## Pre-Deployment Checklist

- [ ] All markdown files are in `/docs`
- [ ] `src/config.js` is updated with your branding
- [ ] Test locally with `npm run dev`
- [ ] Run `npm run build` with no errors
- [ ] Check dark mode rendering

## Environment-Specific Guides

### Cloudflare Pages

Perfect for VelocityDocs - super fast, great dark mode support.

1. Connect your GitHub repo to Cloudflare Pages
2. In project settings:
   - **Build command:** `npm run build`
   - **Output directory:** `dist`
3. Click Deploy
4. Your docs are live at `yourproject.pages.dev`

### Netlify

Simple and free option.

1. Connect your GitHub repo to Netlify
2. Build settings:
   - **Build command:** `npm run build`
   - **Publish directory:** `dist`
3. Deploy
4. Your docs are live at `yourproject.netlify.app`

### Vercel

Fast deployment with edge functions.

1. Import your GitHub repo to Vercel
2. Framework: Vite
3. Build command: `npm run build`
4. Output directory: `dist`
5. Deploy

### GitHub Pages

Free hosting on your GitHub account.

```bash
npm run build
git add dist/
git commit -m "Deploy"
git push origin main
```

Configure your repo settings to deploy from the `/dist` folder.

## Custom Domain

1. Register a domain (GoDaddy, Namecheap, etc.)
2. Update your hosting provider's DNS:
   - **Cloudflare Pages:** Add CNAME record
   - **Netlify:** Add CNAME record
   - **Vercel:** Add CNAME record
3. Wait for DNS propagation (up to 48 hours)

Example DNS record:
```
Type: CNAME
Name: docs
Value: cname.yourhost.com
```

## SSL/HTTPS

All hosting providers above offer **free SSL certificates**:
- Cloudflare Pages: Automatic ✓
- Netlify: Automatic ✓
- Vercel: Automatic ✓
- GitHub Pages: Automatic ✓

## Performance Optimization

VelocityDocs is already optimized, but you can:

1. **Compress images:** Use WebP format
2. **Lazy load images:** Use markdown `![alt](path "lazy")`
3. **Minify code:** Already done in production build
4. **Cache busting:** Vite handles this automatically

## Monitoring

After deployment:

1. Check site speed with [PageSpeed Insights](https://pagespeed.web.dev)
2. Monitor uptime with [UptimeRobot](https://uptimerobot.com) (free)
3. Setup error tracking with [Sentry](https://sentry.io) (optional)

## Troubleshooting

### Build fails
```bash
rm -rf node_modules dist
npm install
npm run build
```

### Dark mode not working
Clear browser cache and hard reload (Ctrl+Shift+R)

### Routes not working
Check your hosting provider's 404 page settings. For SPAs, redirect 404 to `index.html`.
