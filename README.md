# Hunaid Nawaz — portfolio

Public static site. Edit files in `content/`, commit, deploy.

## Run locally

```bash
cd portfolio
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

Light and dark follow the OS until you use the sun/moon control in the header. That choice is saved in the browser.

## Deploy on Vercel

1. Import this repo (or this folder as a project).
2. Set **Root Directory** to `portfolio`.
3. Add `NEXT_PUBLIC_SITE_URL` (your production URL, no trailing slash) so sitemap and robots are correct.
4. Put a real address in `content/person.md` (`email`) before sharing the site. `hunaid@example.com` is a placeholder.

## Edit content

| File | What it is |
| --- | --- |
| `content/person.md` | Name, hero, email, LinkedIn, bio, photo path |
| `content/copy.md` | Section titles and empty-state copy |
| `content/lanes.md` | The four practice lanes on Home |
| `content/toolbox.md` | Tool groups on About |
| `content/roles/*.md` | Jobs on About |
| `content/case-studies/*.md` | Work pages (`/work/[slug]`) |
| `content/posts/*.md` | Writing (`/writing/[slug]`) — add a file with `title` in frontmatter |

No `/api` and no `/v1` routes. This is a Site, not an API.

## Routes

- `/` Home
- `/work` CaseStudy index
- `/work/[slug]` one CaseStudy
- `/about` Person, Roles, Toolbox
- `/writing` Post list
