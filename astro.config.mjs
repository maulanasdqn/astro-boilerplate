import { defineConfig } from "astro/config";
import Unocss from "unocss/astro";
import presetUno from "@unocss/preset-uno";

// https://astro.build/config
export default defineConfig({
  integrations: [
    Unocss({
      presets: [presetUno()],
    }),
  ],
});
