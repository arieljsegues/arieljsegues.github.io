
import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "astro/zod";

const projects = defineCollection({
  loader: glob({
    pattern: "**/*.md",
    base: "./src/content/projects",
  }),

  schema: z.object({
    // Título
    title: z.string(),
    titleEs: z.string().optional(),

    // Información del proyecto
    year: z.number(),
    category: z.string(),

    // Descripción
    description: z.string(),
    descriptionEs: z.string().optional(),

    // Imágenes y vídeo
    image: z.string(),
    video: z.string().optional(),

    // Pistas de audio
    tracks: z
      .array(
        z.object({
          title: z.string(),
          file: z.string(),
        })
      )
      .default([]),

    // Créditos
    credits: z
      .array(
        z.object({
          role: z.string(),
          name: z.string(),
        })
      )
      .default([]),

    // Mostrar en proyectos destacados
    featured: z.boolean().default(true),
  }),
});

export const collections = {
  projects,
};
