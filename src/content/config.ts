import { z, defineCollection } from 'astro:content';
import  { categoriesDict } from '@libs/categories';

function zodEnumFromObjectKeys<K extends string>(obj: Record<K, any>): z.ZodEnum<[K, ...K[]]> {
    const [firstKey, ...otherKeys] = Object.keys(obj) as K[];
    return z.enum([firstKey, ...otherKeys]);
}

const tutorialsCollection = defineCollection({
    schema: ({ image }) => z.object({
        title: z.string(),
        categories: z.array(zodEnumFromObjectKeys(categoriesDict)),
    })
});

export const collections = {
    'tutoriels': tutorialsCollection,
};