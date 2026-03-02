import { defineCollection, z } from "astro:content";

// Accept:
// - https://example.com/file
// - http://example.com/file
// - /uploads/file.pdf (relative path served from public/)
const urlOrPath = z.string().refine((v) => {
  // allow site-relative paths
  if (v.startsWith("/")) return true;

  // allow absolute URLs
  try {
    const u = new URL(v);
    return u.protocol === "http:" || u.protocol === "https:";
  } catch {
    return false;
  }
}, "Invalid url (must be https://... or a site path like /uploads/...)");

const linkSchema = z.object({
  label: z.string(),
  url: urlOrPath,
  kind: z.enum(["view", "download", "external"]).default("external"),
});

const baseSchema = z.object({
  title: z.string(),
  description: z.string(),
  date: z.date().optional(),
  tags: z.array(z.string()).default([]),
  featured: z.boolean().default(false),
  links: z.array(linkSchema).default([]),
});

const publications = defineCollection({ type: "content", schema: baseSchema });
const teaching = defineCollection({ type: "content", schema: baseSchema });
const projects = defineCollection({ type: "content", schema: baseSchema });
const studentProjects = defineCollection({
  type: "content",
  schema: baseSchema,
});

export const collections = {
  publications,
  teaching,
  projects,
  "student-projects": studentProjects,
};
