import { defineCollection, z } from "astro:content";

const linkSchema = z.object({
  label: z.string(),
  url: z.string(),
  kind: z.enum(["view", "download", "external"]).default("external"),
});

const publications = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    description: z.string().default(""),
    date: z.union([z.string(), z.date()]).optional(),
    tags: z.array(z.string()).default([]),
    featured: z.boolean().default(false),
    links: z.array(linkSchema).default([]),
  }),
});

const teaching = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    description: z.string().default(""),
    tags: z.array(z.string()).default([]),
    featured: z.boolean().default(false),
    links: z.array(linkSchema).default([]),
  }),
});

const projects = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    description: z.string().default(""),
    date: z.union([z.string(), z.date()]).optional(),
    tags: z.array(z.string()).default([]),
    featured: z.boolean().default(false),
    links: z.array(linkSchema).default([]),
  }),
});

const studentProjects = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    description: z.string().default(""),
    date: z.union([z.string(), z.date()]).optional(),
    tags: z.array(z.string()).default([]),
    featured: z.boolean().default(false),
    links: z.array(linkSchema).default([]),
  }),
});

/**
 * Site collection contains TWO entries:
 * 1) src/content/site/profile.md    (profile fields)
 * 2) src/content/site/settings.md   (site settings fields)
 *
 * So we allow a superset of both schemas.
 * Also: make `name` optional with a default so builds don't fail.
 */
const site = defineCollection({
  type: "content",
  schema: z.object({
    // shared / safe identity
    name: z.string().optional().default(""), // IMPORTANT: avoid build failures

    // profile fields
    role: z.string().default(""),
    location: z.string().optional(),
    email: z.string().optional(),
    phone: z.string().optional(),
    bio: z.string().default(""),
    avatar: z.string().optional(), // "/profile.jpg" or "/uploads/.."
    background: z.string().optional(), // optional if you use background images
    links: z
      .array(
        z.object({
          label: z.string(),
          url: z.string(),
        })
      )
      .default([]),

    // settings fields (for settings.md)
    site_title: z.string().optional(),
    site_tagline: z.string().optional(),
    footer_text: z.string().optional(),
    nav: z
      .array(
        z.object({
          label: z.string(),
          href: z.string(),
        })
      )
      .optional(),
  }),
});

export const collections = {
  publications,
  teaching,
  projects,
  "student-projects": studentProjects,
  site,
};
