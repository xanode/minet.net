import { ui, defaultLang } from "@i18n/ui";


export async function getStaticTranslations() {
    return Object.keys(ui).map((langCode: string) => {
        return { params: { lang: langCode } };
    });
}

export function getLangFromUrl(url: URL) {
    const [, lang] = url.pathname.split('/');
    if (lang in ui) return lang as keyof typeof ui;
    return defaultLang;
}

export function useTranslations(lang: keyof typeof ui) {
    return function t(key: keyof typeof ui[typeof defaultLang]) {
        return ui[lang][key] || ui[defaultLang][key];
    }
}