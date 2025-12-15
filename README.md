# Velocity Docs

Welcome to VelocityDocs! This is a lightweight, fast markdown documentation renderer built with React and Vite.

## Installation

Clone the repository and install dependencies:

```bash
npm install
```

## Configuration

Edit `src/config.js` to customize your docs:

```javascript
export const config = {
  title: "Your Docs Title",
  logo: "/your-logo.png",
  github: "https://github.com/yourusername/repo"
}
```

## File Structure

Place your markdown files in the `/docs` folder. The folder structure automatically becomes your navigation:

```
docs/
  getting-started.md
  api/
    endpoints.md
    authentication.md
  guides/
    setup.md
    deployment.md
```

## Running Locally

```bash
npm run dev
```

Then open `http://localhost:5173` in your browser.

## Building

```bash
npm run build
```

The output goes to `/dist` for deployment to Cloudflare Pages, Netlify, or any static host.

---

Note: Yes, this was written with the help of AI. ;)