# Zs at the Gap

Temporarily published at https://madspeed485-spec.github.io/zsatthegap/ while DNS for zsatthegap.com is not set up. `astro.config.mjs` uses that GitHub Pages origin and `base: '/zsatthegap'`.

## Switch back to zsatthegap.com

1. Move `docs/CNAME.disabled` back to `public/CNAME` (the file already contains `zsatthegap.com`).
2. In `astro.config.mjs`, set `site` to `https://zsatthegap.com` and remove `base`.
3. Push to `main`. The Pages workflow deploys `dist/`, and the restored `CNAME` tells GitHub Pages to serve the custom domain again.
