import { z, defineCollection } from 'astro:content';
import { IconsDict } from '@libs/icons';

function zodEnumFromObjectKeys<K extends string>(obj: Record<K, any>): z.ZodEnum<[K, ...K[]]> {
    const [firstKey, ...otherKeys] = Object.keys(obj) as K[];
    return z.enum([firstKey, ...otherKeys]);
}

const tutorialsCollection = defineCollection({
    schema: ({ image }) => z.object({
        icon: zodEnumFromObjectKeys(IconsDict),
        title: z.string(),
        description: z.string(),
    })
});

export const collections = {
    'tutoriels': tutorialsCollection,
};