import { defineConfig } from 'astro/config';
export default defineConfig({
  site: 'https://zsatthegap.com',
  server: { port: 4400 },
  image: { service: { entrypoint: './image-service.mjs' } },
});
