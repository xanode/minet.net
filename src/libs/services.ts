import type { ImageMetadata } from "astro";
import type { ui, defaultLang } from "@i18n/ui";

import CryptpadLogoReference from "@assets/services/cryptpad.png";
import EtherpadLogoReference from "@assets/services/etherpad.png";
import FramadateLogoReference from "@assets/services/framadate.png";
import GitlabLogoReference from "@assets/services/gitlab.png";
import HostingLogoReference from "@assets/services/hosting.png";
import LimesurveyLogoReference from "@assets/services/limesurvey.png";
import MailmanLogoReference from "@assets/services/mailman.png";
import WikiJSLogoReference from "@assets/services/wikijs.png";


interface Service {
    name: keyof typeof ui[typeof defaultLang];
    description: keyof typeof ui[typeof defaultLang];
    url: string;
    image: ImageMetadata;
}

export const services: Service[] = [
    {
        name: 'services.cryptpad.name',
        description: 'services.cryptpad.description',
        url: 'https://cryptpad.minet.net/',
        image: CryptpadLogoReference,
    },
    {
        name: 'services.wiki.name',
        description: 'services.wiki.description',
        url: 'https://wiki.minet.net/',
        image: WikiJSLogoReference,
    },
    {
        name: 'services.framadate.name',
        description: 'services.framadate.description',
        url: 'https://framadate.minet.net/',
        image: FramadateLogoReference,
    },
    {
        name: 'services.survey.name',
        description: 'services.survey.description',
        url: 'https://sondage.minet.net/',
        image: LimesurveyLogoReference,
    },
    {
        name: 'services.gitlab.name',
        description: 'services.gitlab.description',
        url: 'https://gitlab.minet.net/',
        image: GitlabLogoReference,
    },
    {
        name: 'services.mailing-lists.name',
        description: 'services.mailing-lists.description',
        url: 'https://mailman.minet.net/',
        image: MailmanLogoReference,
    },
    {
        name: 'services.etherpad.name',
        description: 'services.etherpad.description',
        url: 'https://pad.minet.net/',
        image: EtherpadLogoReference,
    },
    {
        name: 'services.hosting.name',
        description: 'services.hosting.description',
        url: 'https://gitlab.minet.net/minet/hosting',
        image: HostingLogoReference,
    },
]