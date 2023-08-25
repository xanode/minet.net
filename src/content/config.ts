import { defineCollection, reference, z } from 'astro:content';


const categoriesCollection = defineCollection({
    type: 'data',
    schema: ({ image }) => z.object({
        name: z.string(),
        description: z.string(),
    })
})

const tutorialsCollection = defineCollection({
    type: 'content',
    schema: ({ image }) => z.object({
        title: z.string(),
        category: reference('categories'),
    })
});

export const collections = {
    'categories': categoriesCollection,
    'tutoriels': tutorialsCollection,
};