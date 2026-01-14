// @ts-check
import { defineConfig, fontProviders } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import mdx from "@astrojs/mdx";

// https://astro.build/config
export default defineConfig({
  image: {
    service: {
      entrypoint: "astro/assets/services/sharp",
      config: {
        limitInputPixels: false,
      },
    },
    // @ts-ignore
    formats: ["image/webp", "image/avif", "image/png", "image/jpeg"],
    cacheDir: "./.astro/cache/images",
  },
  vite: {
    plugins: [tailwindcss()],
  },
  // @ts-ignore
  alias: {
    "@": "./src",
  },
  experimental: {
    fonts: [
      {
        provider: fontProviders.google(),
        name: "Inter",
        cssVariable: "--font-inter",
        fallbacks: ["ui-sans-serif", "system-ui"],
      },
      {
        provider: fontProviders.google(),
        name: "JetBrains Mono",
        cssVariable: "--font-jetbrains-mono",
        fallbacks: ["ui-monospace", "SFMono-Regular"],
      },
    ],
  },
  integrations: [mdx()],
});