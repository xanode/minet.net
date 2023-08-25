import { defineCollection, reference, z } from 'astro:content';
import { IconsDict } from '@libs/icons';

function zodEnumFromObjectKeys<K extends string>(obj: Record<K, any>): z.ZodEnum<[K, ...K[]]> {
    const [firstKey, ...otherKeys] = Object.keys(obj) as K[];
    return z.enum([firstKey, ...otherKeys]);
}

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
        icon: zodEnumFromObjectKeys(IconsDict).optional(),
        title: z.string(),
        category: reference('categories'),
    })
});

export const collections = {
    'categories': categoriesCollection,
    'tutoriels': tutorialsCollection,
};