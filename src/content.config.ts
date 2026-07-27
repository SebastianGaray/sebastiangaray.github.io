import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "astro/zod";

const localizedEntry = z.object({
  title: z.string(),
  description: z.string(),
  language: z.enum(["en", "es"]),
  translationKey: z.string(),
  publishedAt: z.coerce.date(),
  featured: z.boolean().default(false),
});

const projects = defineCollection({
  loader: glob({
    pattern: "**/*.{md,mdx}",
    base: "./src/content/projects",
    generateId: ({ entry }) => entry.replace(/\.(md|mdx)$/, ""),
  }),
  schema: localizedEntry.extend({
    slug: z.string(),
    role: z.string(),
    period: z.string(),
    stack: z.array(z.string()),
    repository: z.url().optional(),
  }),
});

const openSource = defineCollection({
  loader: glob({
    pattern: "**/*.{md,mdx}",
    base: "./src/content/open-source",
    generateId: ({ entry }) => entry.replace(/\.(md|mdx)$/, ""),
  }),
  schema: localizedEntry.extend({
    repository: z.url(),
    stack: z.array(z.string()),
  }),
});

const notes = defineCollection({
  loader: glob({
    pattern: "**/*.{md,mdx}",
    base: "./src/content/notes",
    generateId: ({ entry }) => entry.replace(/\.(md|mdx)$/, ""),
  }),
  schema: localizedEntry.extend({
    slug: z.string(),
    topics: z.array(z.string()),
  }),
});

export const collections = { projects, openSource, notes };
