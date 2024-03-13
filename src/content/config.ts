import { defineCollection, z } from 'astro:content';

export const collections = {
	project: defineCollection({
		type: 'content',
		schema: z.object({
			title: z.string(),
			img: z.string(),
			img_alt: z.string().optional(),
			action: z.string(),
			order: z.number(),
			cardText: z.array(
				z.object({
					header: z.string(),
					body: z.string(),
				})
			),
		}),
	}),
	caseStudies: defineCollection({
		type: 'content',
		schema: z.object({
			title: z.string(),
			description: z.string(),
			role: z.string(),
			date: z.string(),
			img_alt: z.string().optional(),
			items: z.array(
				z.object({
					title: z.string(),
					description: z.string(),
					categories: z.array(z.string()),
					img: z.string(),
					img_alt: z.string().optional(),
				})
			),
		}),
	}),
};
