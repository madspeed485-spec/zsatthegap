import { defineConfig } from 'astro/config';
export default defineConfig({
  site: 'https://madspeed485-spec.github.io',
  base: '/zsatthegap',
  image: { service: { entrypoint: './image-service.mjs' } },
});
