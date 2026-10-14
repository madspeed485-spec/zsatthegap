import { defineConfig } from 'astro/config';
export default defineConfig({
  site: 'https://madspeed485-spec.github.io',
  base: '/zsatthegap',
  server: { port: 4400 },
  image: { service: { entrypoint: './image-service.mjs' } },
});
