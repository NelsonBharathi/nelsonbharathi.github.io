import { defineCollection, z } from "astro:content";

const linkSchema = z.object({
  label: z.string(),
  url: z.string(),
  kind: z.enum(["view", "download", "external"]).default("external"),
});

const baseItemSchema = z.object({
  title: z.string(),
  description: z.string(),
  date: z.coerce.date().optional(), // ✅ FIX HERE
  tags: z.array(z.string()).default([]),
  featured: z.boolean().default(false),
  links: z.array(linkSchema).default([]),
});

const publications = defineCollection({
  type: "content",
  schema: baseItemSchema,
});

const teaching = defineCollection({
  type: "content",
  schema: baseItemSchema,
});

const projects = defineCollection({
  type: "content",
  schema: baseItemSchema,
});

const studentProjects = defineCollection({
  type: "content",
  schema: baseItemSchema,
});

const site = defineCollection({
  type: "content",
  schema: z.object({
    // for src/content/site/profile.md and settings.md
    // Astro doesn't require strict separation if you read them by path,
    // but this keeps the collection valid.
  }),
});

export const collections = {
  publications,
  teaching,
  projects,
  "student-projects": studentProjects,
  site,
};
