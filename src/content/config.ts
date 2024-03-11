// 1. Import utilities from `astro:content`
import { z, reference, defineCollection } from 'astro:content';
// 2. Define your collection(s)
const interviews = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    linkTitle: z.string().optional(),
    draft: z.nullable(z.boolean()).optional(),
    type: z.string().optional(),
    date: z.date().optional(),
    authors:  z.nullable(z.array(z.string())).optional(),
    subgenres:  z.nullable(z.array(z.string())).optional(),
    original_language: z.nullable(z.string()).optional(),
    featured_image: z.nullable(z.string()).optional(),
    featured_image_credit:z.nullable(z.string()).optional(),
    tax_issue:z.nullable(z.string()).optional(),
    tax_format:z.nullable(z.string()).optional(),
  })
});

const fictions = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    linkTitle: z.string().optional(),
    draft: z.nullable(z.boolean()).optional(),
    type: z.string().optional(),
    date: z.date().optional(),
    authors:  z.nullable(z.array(z.string())).optional(),
    subgenres:  z.nullable(z.array(z.string())).optional(),
    original_language: z.nullable(z.string()).optional(),
    featured_image: z.nullable(z.string()).optional(),
    featured_image_credit:z.nullable(z.string()).optional(),
    tax_issue:z.nullable(z.string()).optional(),
    tax_format:z.nullable(z.string()).optional(),
  })
});
// 3. Export a single `collections` object to register your collection(s)
//    This key should match your collection directory name in "src/content"
export const collections = {
  'interviews': interviews,
  'fictions': fictions
};