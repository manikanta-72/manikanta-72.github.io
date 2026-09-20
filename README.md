# manikanta-72.github.io

Personal site built with [Astro](https://astro.build). No jQuery, no Bootstrap, no build-time CSS framework: ~12 KB of hand-written CSS with design tokens.

## Run it

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # static output in dist/
```

## Where things live

| What                                  | Where                                    |
| ------------------------------------- | ---------------------------------------- |
| About text, facts, links, resume path | `src/data/site.ts`                       |
| Experience, publications, projects    | `src/data/site.ts` (typed arrays)        |
| Blog posts                            | `src/content/blog/*.md`                  |
| Colors, fonts, spacing                | `src/styles/global.css` (`:root` tokens) |
| Post typography                       | `src/styles/post.css`                    |
| Page shells                           | `src/layouts/Base.astro`, `src/pages/`   |
| Reusable pieces                       | `src/components/`                        |

## Add a blog post

Create `src/content/blog/my-post.md`:

```markdown
---
title: 'Post title'
description: 'One line that shows on the card and in link previews.'
date: 2026-10-01
tag: Inference
draft: false
---

Your markdown here.
```

That's it. The homepage card, the post page, the RSS feed and the sitemap all update on build. Set `draft: true` to keep it out of the build.

## Deploy

`.github/workflows/deploy.yml` builds and publishes to GitHub Pages on every push to `main`.
One-time setup: repo Settings → Pages → Source → **GitHub Actions**.

## Keeping it current

```bash
npm run check         # TypeScript + Astro diagnostics
npm run format        # Prettier (incl. .astro files)
npm run upgrade       # Astro codemod upgrade + npm update + audit
```

- `npm run build` runs `astro check` first, so type errors fail the build instead of shipping.
- CI also runs `format:check`, so formatting never drifts.
- Dependabot opens grouped monthly PRs for npm packages and GitHub Actions (`.github/dependabot.yml`).
- Node version is pinned in `.nvmrc` and enforced by `engines`; CI reads the same file.

## Included

- Content collections with typed frontmatter (a bad date or missing title fails the build)
- Syntax highlighting (Shiki) with light and dark themes, no client-side JS
- RSS feed at `/rss.xml`, sitemap, canonical URLs, Open Graph tags
- Dark mode from the OS setting, four responsive layouts, reduced-motion support
