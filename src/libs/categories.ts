import type { IconsDict } from '@libs/icons';

export type Category = {
    icon: keyof typeof IconsDict,
    name: string,
    description: string,
    slug: string,
};

export const categories: Array<Category> = [
    {
        icon: 'question',
        name: 'Pour commencer',
        description: 'Ajouter un appareil à son compte, trouver une adresse MAC, etc.',
        slug: 'pour-commencer'
    },
    {
        icon: 'wi-fi',
        name: 'Wi-Fi',
        description: 'Connecter un appareil en Wi-Fi.',
        slug: 'wi-fi'
    },
    {
        icon: 'filaire',
        name: 'Filaire',
        description: 'Connecter un appareil en filaire.',
        slug: 'filaire'
    },
    {
        icon: 'windows',
        name: 'Windows',
        description: 'Connecter son appareil Windows.',
        slug: 'windows'
    },
    {
        icon: 'apple',
        name: 'Apple',
        description: 'Connecter son appareil Apple.',
        slug: 'apple'
    },
    {
        icon: 'android',
        name: 'Android',
        description: 'Connecter son appareil Android.',
        slug: 'android'
    },
    {
        icon: 'linux',
        name: 'Linux',
        description: 'Connecter son appareil Linux.',
        slug: 'linux'
    },
    {
        icon: 'autres-services',
        name: 'Autres services',
        description: 'TV, configuration Eduroam, WSL, etc.',
        slug: 'autres-services'
    },
    {
        icon: 'consoles',
        name: 'Console de jeux',
        description: 'Connecter une PlayStation, Xbox, Nitendo Switch, etc.',
        slug: 'consoles-de-jeux'
    }
]

// Create an object that has category slugs as keys
// and the corresponding category as value
export const categoriesDict = categories.reduce((acc, category) => {
    acc[category.slug] = category;
    return acc;
}, {} as Record<string, Category>);