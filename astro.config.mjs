import { defineConfig } from 'astro/config';
export default defineConfig({
  site: 'https://zsatthegap.com',
  image: { service: { entrypoint: './image-service.mjs' } },
});
