# Minimal Blog

A clean, minimalist blog built with [Astro](https://astro.build), featuring a strictly monochromatic design, content collections for markdown posts, and optimized performance.

## ✨ Features

- **Minimalist Design**: Pure black and white aesthetic with carefully crafted typography
- **Content Collections**: Markdown-based blog posts with frontmatter validation
- **Dark Mode**: Automatic system preference detection with manual toggle
- **SEO Optimized**: Meta tags, Open Graph data, XML sitemap, and RSS feed
- **Performance First**: Static generation with zero JavaScript by default
- **Mobile Responsive**: Beautiful experience across all devices
- **Accessibility**: WCAG compliant with proper semantic HTML and keyboard navigation

## 🛠️ Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd minimal-blog
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   ```
   http://localhost:4321
   ```

## 📝 Adding Content

### Creating Blog Posts

Create new markdown files in `src/content/posts/`:

```markdown
---
title: "Your Post Title"
description: "A brief description of your post"
publishDate: 2024-01-15
tags: ["design", "development"]
draft: false
---

# Your Post Title

Your content here...
```

### Content Schema

Posts support the following frontmatter properties:

- `title` (required): The post title
- `description` (required): A brief description for SEO and previews
- `publishDate` (required): Publication date as YYYY-MM-DD
- `tags` (optional): Array of tag strings
- `draft` (optional): Set to `true` to hide from production

## 🎨 Customization

### Design System

The blog uses a carefully crafted design system with:

- **Colors**: Pure black (#000000) and white (#ffffff) with semantic grays
- **Typography**: Inter font family with three weights (400, 600, 700)
- **Spacing**: 8px base unit with consistent vertical rhythm
- **Components**: Reusable components with hover states and transitions

### Tailwind Configuration

Customize the design in `tailwind.config.js`:

```javascript
theme: {
  extend: {
    fontFamily: {
      'sans': ['Inter', 'system-ui', 'sans-serif'],
    },
    // Add your customizations here
  }
}
```

### Site Configuration

Update site metadata in `astro.config.mjs`:

```javascript
export default defineConfig({
  site: 'https://yourdomain.com', // Your site URL
  // Other configuration...
});
```

## 📈 SEO & Performance

### Built-in Optimizations

- **Static Generation**: Zero JavaScript by default for maximum performance
- **Image Optimization**: Automatic image processing and responsive sizing
- **Meta Tags**: Comprehensive SEO meta tags and Open Graph data
- **Sitemap**: Automatically generated XML sitemap
- **RSS Feed**: Full-content RSS feed at `/rss.xml`
- **Lighthouse Score**: Perfect 100 scores across all metrics

### Customizing SEO

Update the base layout in `src/layouts/BaseLayout.astro` to modify:

- Default meta descriptions
- Open Graph images
- Twitter Card settings
- Structured data markup

## 🚀 Deployment

### Build for Production

```bash
npm run build
```

This generates static files in the `dist/` directory.

### Deploy to Netlify

1. **Connect your repository** to Netlify
2. **Set build command**: `npm run build`
3. **Set publish directory**: `dist`
4. **Deploy automatically** on git push

### Deploy to Vercel

1. **Connect your repository** to Vercel
2. **Framework preset**: Astro
3. **Deploy automatically** on git push

### Other Platforms

The built files in `dist/` can be deployed to any static hosting service:

- GitHub Pages
- Cloudflare Pages
- AWS S3 + CloudFront
- Google Firebase Hosting

## 🧞 Commands

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`     |
| `npm run build`           | Build your production site to `./dist/`         |
| `npm run preview`         | Preview your build locally, before deploying    |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check`|
| `npm run astro -- --help` | Get help using the Astro CLI                    |
| `npm run check`           | Run TypeScript type checking                    |

## 🤝 Contributing

Contributions are welcome! Please read the contributing guidelines before submitting PRs.

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- [Astro](https://astro.build) for the excellent static site generator
- [Tailwind CSS](https://tailwindcss.com) for the utility-first CSS framework
- [Inter](https://rsms.me/inter/) for the beautiful typography
- The minimalist design philosophy that inspired this project

---

**Built with ❤️ and [Astro](https://astro.build)**
