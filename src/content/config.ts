import { defineCollection, reference, z } from 'astro:content';
import { IconsDict } from '@libs/data/icons';

function zodEnumFromObjectKeys<K extends string>(obj: Record<K, any>): z.ZodEnum<[K, ...K[]]> {
    const [firstKey, ...otherKeys] = Object.keys(obj) as K[];
    return z.enum([firstKey, ...otherKeys]);
}

const categoriesCollection = defineCollection({
    type: 'data',
    schema: z.object({
        name: z.string(),
        description: z.string(),
    })
});

const legalCollection = defineCollection({
    type: 'content',
    schema: z.object({
        title: z.string(),
        date: z.date().optional(),
    })
});

const tutorialsCollection = defineCollection({
    type: 'content',
    schema: z.object({
        icon: zodEnumFromObjectKeys(IconsDict).optional(),
        title: z.string(),
        category: reference('categories'),
    })
});

export const collections = {
    'categories': categoriesCollection,
    'legal': legalCollection,
    'tutoriels': tutorialsCollection,
};