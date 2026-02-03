# Astro Blog & Documentation Site

A comprehensive blog and documentation platform built with [Astro](https://astro.build), featuring rich content collections for blogs, technical documentation, and technology guides.

## 🚀 Project Structure

```text
/
├── public/              # Static assets
│   └── images/
├── src/
│   ├── components/      # Reusable Astro components
│   │   ├── layout/      # Layout components (header, footer, sections)
│   │   └── ui/          # UI components (badges, buttons, cards, etc.)
│   ├── content/         # Content collections
│   │   ├── blogs/       # Blog posts (markdown)
│   │   ├── docs/        # Documentation (organized by topic)
│   │   │   ├── astro/
│   │   │   ├── css/
│   │   │   ├── html/
│   │   │   ├── javascript/
│   │   │   ├── nextjs/
│   │   │   ├── react/
│   │   │   └── ...
│   │   ├── technologies/ # Technology reference data
│   │   └── config.ts    # Content collection configuration
│   ├── layouts/         # Page layouts
│   ├── lib/             # Utility functions
│   ├── pages/           # Route pages
│   │   ├── index.astro
│   │   ├── about.astro
│   │   ├── components.astro
│   │   ├── blogs/       # Blog routes
│   │   └── docs/        # Documentation routes
│   ├── images/          # Image assets
│   └── styles/          # Global styles
├── astro.config.mjs     # Astro configuration
├── tsconfig.json        # TypeScript configuration
└── package.json
```

## 📝 Content Collections

### Blogs
Blog posts are stored in `src/content/blogs/` as markdown files. Each post can be accessed via `/blogs/[slug]`.

### Docs
Documentation is organized in `src/content/docs/` by technology topics:
- **Astro** - Core features, patterns, limitations, and markdown handling
- **CSS** - Features, alternatives, ecosystem, and strengths/limitations
- **HTML** - Core features, accessibility, security, performance, and more
- **JavaScript** - Modern capabilities, performance optimization, frameworks, and ecosystem
- **Next.js** - Core features, business value, use cases, and comparison
- **React** - Architecture, core concepts, patterns, ecosystem, and limitations

### Technologies
Reference data for various technologies in JSON format.

## 🧞 Commands

All commands are run from the root of the project:

| Command          | Action                                      |
| :--------------- | :------------------------------------------ |
| `pnpm install`   | Installs dependencies                       |
| `pnpm dev`       | Starts local dev server at `localhost:4321` |
| `pnpm build`     | Builds your production site to `./dist/`    |
| `pnpm preview`   | Preview your build locally                  |
| `pnpm astro ...` | Run CLI commands like `astro add`           |

## 🎨 Components

The project includes a comprehensive UI component library:
- **Layout Components**: Header, Footer, Section layouts
- **UI Components**: Badges, Buttons, Hero sections, Table of contents
- **Card Components**: Modular card system with header, content, description, footer, title, and action

## 📚 Want to learn more?

- [Astro Documentation](https://docs.astro.build)
- [Astro Discord Community](https://astro.build/chat)
