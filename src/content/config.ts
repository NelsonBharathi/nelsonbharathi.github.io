import { defineCollection, z } from "astro:content";

const publications = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    description: z.string().default(""),
    date: z.union([z.string(), z.date()]).optional(),
    tags: z.array(z.string()).default([]),
    featured: z.boolean().default(false),
    links: z
      .array(
        z.object({
          label: z.string(),
          url: z.string(),
          kind: z.enum(["view", "download", "external"]).default("external"),
        })
      )
      .default([]),
  }),
});

const teaching = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    description: z.string().default(""),
    tags: z.array(z.string()).default([]),
    featured: z.boolean().default(false),
    links: z
      .array(
        z.object({
          label: z.string(),
          url: z.string(),
          kind: z.enum(["view", "download", "external"]).default("external"),
        })
      )
      .default([]),
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
    links: z
      .array(
        z.object({
          label: z.string(),
          url: z.string(),
          kind: z.enum(["view", "download", "external"]).default("external"),
        })
      )
      .default([]),
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
    links: z
      .array(
        z.object({
          label: z.string(),
          url: z.string(),
          kind: z.enum(["view", "download", "external"]).default("external"),
        })
      )
      .default([]),
  }),
});

const site = defineCollection({
  type: "content",
  schema: z.object({
    name: z.string(),
    role: z.string().default(""),
    location: z.string().optional(),
    email: z.string().optional(),
    phone: z.string().optional(),
    bio: z.string().default(""),
    avatar: z.string().optional(), // e.g. "/profile.jpg" or "/uploads/..."
    links: z
      .array(
        z.object({
          label: z.string(),
          url: z.string(),
        })
      )
      .default([]),
  }),
});

export const collections = {
  publications,
  teaching,
  projects,
  "student-projects": studentProjects,
  site,
};
