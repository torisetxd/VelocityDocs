# Setup Guide

Get VelocityDocs up and running in minutes.

## Prerequisites

- Node.js 16+ 
- npm or yarn
- Git

## Step 1: Clone or Fork

Clone the repository:

```bash
git clone https://github.com/yourusername/velocitydocs.git
cd velocitydocs
```

Or fork it on GitHub for your own documentation project.

## Step 2: Install Dependencies

```bash
npm install
```

## Step 3: Create Your Docs

Replace the sample `/docs` folder with your markdown files:

```bash
rm -rf docs/
mkdir docs
```

Create your first doc:

```bash
echo "# Welcome\n\nYour documentation here." > docs/index.md
```

## Step 4: Customize Config

Open `src/config.js` and update:

```javascript
export const config = {
  title: "My Awesome Docs",
  description: "Documentation for my project",
  logo: "/my-logo.png",
  github: "https://github.com/myusername/myrepo"
}
```

## Step 5: Test Locally

```bash
npm run dev
```

Open http://localhost:5173 and check the docs.

## Step 6: Build for Production

```bash
npm run build
```

The `/dist` folder is ready for deployment.

## Deployment Options

### Cloudflare Pages (Recommended)

1. Push your repo to GitHub
2. Go to [Cloudflare Pages](https://pages.cloudflare.com)
3. Create a new project, select your repo
4. Set build command: `npm run build`
5. Set output directory: `dist`
6. Deploy

### Netlify

1. Connect your GitHub repo
2. Build command: `npm run build`
3. Publish directory: `dist`
4. Deploy

### Any Static Host

Push `/dist` to any static hosting (Vercel, GitHub Pages, S3, etc.)

## Next Steps

- Write your documentation in markdown
- Customize the navbar with your branding
- Set up a GitHub webhook for auto-deploys
