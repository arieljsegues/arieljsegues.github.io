// @ts-check
import { defineConfig } from "astro/config";

export default defineConfig({
	site: "https://arieljsegues.github.io",
	i18n: {
	locales: ["en", "es"],
	defaultLocale: "en",
	routing: {
		prefixDefaultLocale: false,
	},
	},
});