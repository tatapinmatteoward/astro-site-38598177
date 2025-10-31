import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  integrations: [tailwind()],
  site: 'https://funpettoys-blog.pages.dev',
  build: {
    format: 'directory'
  }
});
