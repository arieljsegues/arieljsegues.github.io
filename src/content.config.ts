import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "astro/zod";

const projects = defineCollection({
	loader: glob({
		pattern: "**/*.md",
		base: "./src/content/projects",
	}),

	schema: z.object({
		title: z.string(),
		year: z.number(),
		category: z.string(),
		description: z.string(),
		image: z.string(),
		video: z.string().optional(),

		tracks: z
			.array(
				z.object({
					title: z.string(),
					file: z.string(),
				})
			)
			.default([]),

		credits: z
			.array(
				z.object({
					role: z.string(),
					name: z.string(),
				})
			)
			.default([]),

		featured: z.boolean().default(true),
	}),
});

export const collections = {
	projects,
};