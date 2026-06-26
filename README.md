# Prakhar Sharma Academic Website

Static academic website for `praksharma.github.io`.

## Structure

- `index.html` contains the single-page shell, layout, styling, and small browser-side interactions.
- `content/*.md` contains editable page content for the main sections.
- `assets/img/bio-photo.jpg` is the profile image used by the sidebar.
- `old/` preserves the previous Jekyll/al-folio site during migration.

## Local Preview

Open `index.html` directly in a browser for a quick preview.

For the closest GitHub Pages behavior, serve the folder with any static file server, for example:

```sh
python3 -m http.server 8000
```

Then visit `http://localhost:8000`.

No Docker, Ruby, Jekyll, or dynamic server is required.

## Hosting Checklist

- Keep `.nojekyll` at the repository root so GitHub Pages serves the static files directly.
- Keep `404.html`, `robots.txt`, and `sitemap.xml` at the repository root.
- Publish from the repository root on GitHub Pages.
- After publishing, visit `https://praksharma.github.io/`, `https://praksharma.github.io/robots.txt`, and `https://praksharma.github.io/sitemap.xml`.
