import { defineConfig } from 'astro/config';

import icon from "astro-icon";
import sitemap from 'astro-sitemap';
import { astroImageTools } from 'astro-imagetools'

const website  = 'https://deluxebeauty.cl';

// https://astro.build/config
export default defineConfig({
  site: website, 
  integrations: [
    icon(),
    astroImageTools,
    sitemap({
      canonicalURL: website ,
      lastmod: new Date(),
      createLinkInHead: false,
      xmlns: {
        xhtml: true
      }})]
});