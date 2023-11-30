import type { ImageMetadata } from "astro";
import type { ui, defaultLang } from "@i18n/ui";

import TelecomSudParisLogoReference from "@assets/partenaires/telecom-sudparis.png";
import IMTBSLogoReference from "@assets/partenaires/imt-bs.png";
import OrnessLogoReference from "@assets/partenaires/orness.png";
import FlamsLogoReference from "@assets/partenaires/flams.png";
import TakestyleLogoReference from "@assets/partenaires/takestyle.png";


interface Partner {
    name: keyof typeof ui[typeof defaultLang];
    description: keyof typeof ui[typeof defaultLang];
    image: ImageMetadata;
}

export const partners: Partner[] = [
    {
        name: 'partners.tsp.name',
        description: 'partners.tsp.description',
        image: TelecomSudParisLogoReference,
    },
    {
        name: 'partners.imtbs.name',
        description: 'partners.imtbs.description',
        image: IMTBSLogoReference,
    },
    {
        name: 'partners.orness.name',
        description: 'partners.orness.description',
        image: OrnessLogoReference,
    },
    {
        name: 'partners.flams.name',
        description: 'partners.flams.description',
        image: FlamsLogoReference,
    },
    {
        name: 'partners.takestyle.name',
        description: 'partners.takestyle.description',
        image: TakestyleLogoReference,
    }
]