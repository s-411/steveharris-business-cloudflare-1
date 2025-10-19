# Landing Page - Cloudflare Workers Deployment

A lightweight, modern landing page deployed on Cloudflare Workers with static asset serving.

## Features

- Beautiful gradient background with optional image overlay
- Responsive design that works on all devices
- Wistia video embed support
- Call-to-action button
- Fast global deployment via Cloudflare Workers
- **Free static asset requests** on Cloudflare Workers

## Project Structure

```
.
├── public/              # Static assets served by the worker
│   ├── index.html      # Main landing page
│   ├── styles.css      # Styling and design
│   └── background.jpg  # Background image (add your own)
├── src/
│   └── index.js        # Worker script to serve static files
├── wrangler.toml       # Cloudflare Workers configuration
└── package.json        # Project dependencies
```

## Prerequisites

- Node.js (v16 or higher)
- npm or yarn
- Cloudflare account (free tier works fine)

## Setup Instructions

### 1. Install Dependencies

```bash
npm install
```

### 2. Customize Content

#### Update the Landing Page Text
Edit `public/index.html`:
- Line 14: Update the headline
- Line 15: Update the sub-headline
- Line 29: Update the CTA button text

#### Add Your Wistia Video
In `public/index.html`, replace `XXXXXXXXX` (appears 4 times on lines 18-20, 23) with your actual Wistia video ID.

To find your Wistia video ID:
1. Go to your Wistia account
2. Select your video
3. Click "Embed & Share"
4. The video ID is in the embed code

#### Add Background Image (Optional)
1. Add your image to the `public/` folder
2. Name it `background.jpg` (or update the reference in `styles.css`)
3. Recommended: 1920x1080 resolution, under 500KB

See `public/BACKGROUND-IMAGE.md` for more details.

#### Customize Colors
Edit `public/styles.css`:
- Line 19: Change the gradient colors (default: purple/blue)
- Line 81: Change the button text color
- Line 80: Change the button background color

### 3. Local Development

Test your landing page locally:

```bash
npm run dev
```

Visit `http://localhost:8787` in your browser.

### 4. Deploy to Cloudflare Workers

#### First-time Setup

1. **Login to Cloudflare:**
```bash
npx wrangler login
```

2. **Update Project Name (Optional):**
Edit `wrangler.toml` and change the `name` field to your preferred worker name.

3. **Deploy:**
```bash
npm run deploy
```

Your landing page will be live at: `https://your-worker-name.your-subdomain.workers.dev`

## Updating Your Site

1. Make changes to files in the `public/` folder
2. Test locally with `npm run dev`
3. Deploy with `npm run deploy`

Changes go live instantly!

## Custom Domain

To use your own domain:

1. Add your domain to Cloudflare (if not already added)
2. In the Cloudflare dashboard, go to Workers & Pages
3. Select your worker
4. Click "Triggers" tab
5. Add a custom domain under "Custom Domains"

## Performance & Costs

- **Static asset requests:** FREE (unlimited)
- **Worker invocations:** 100,000/day on free tier
- **Global CDN:** Automatic
- **Load time:** Typically under 1 second worldwide

## Why Cloudflare Workers (Not Pages)?

As of 2025, Cloudflare Pages is in maintenance mode with all development focused on Workers:
- Workers receives all new features and updates
- Static assets on Workers are free (same as Pages)
- Better long-term support and ecosystem integration
- Access to advanced features (Durable Objects, Cron Triggers, etc.)

## Troubleshooting

### Wrangler command not found
Run: `npm install` or use `npx wrangler` instead of `wrangler`

### Video not showing
Make sure you replaced ALL instances of `XXXXXXXXX` with your Wistia video ID in `index.html`

### Background image not loading
- Check the file is named `background.jpg` in the `public/` folder
- Verify the path in `styles.css` line 21 matches your filename
- Redeploy after adding the image: `npm run deploy`

### Changes not showing after deploy
- Clear your browser cache (Cmd+Shift+R on Mac, Ctrl+Shift+R on Windows)
- Wait 1-2 minutes for global CDN propagation

## Support

For issues with:
- **Cloudflare Workers:** [Cloudflare Documentation](https://developers.cloudflare.com/workers/)
- **Wrangler CLI:** [Wrangler Docs](https://developers.cloudflare.com/workers/wrangler/)
- **This project:** Open an issue in this repository

## License

MIT - Feel free to use this for any project!
