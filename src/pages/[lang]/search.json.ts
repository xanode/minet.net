import { getCollection } from "astro:content";
import { getStaticTranslations } from "@i18n/utils";
import { remark } from "remark";
import remarkHtml from "remark-html";
import type { APIContext, APIRoute } from "astro";
import type { CollectionEntry } from "astro:content";


export function getStaticPaths() {
    return getStaticTranslations();
}


type Tutorial = {
    title: CollectionEntry<"tutoriels">["data"]["title"];
    slug: CollectionEntry<"tutoriels">["slug"];
    body: CollectionEntry<"tutoriels">["body"];
}

function extractTextFromMDX(mdxContent: string): string {
    const htmlContent = remark().use(remarkHtml).processSync(mdxContent).toString();
    const textContent = htmlContent.replace(/<\/?[^>]+(>|$)/g, '').replace(/import.*/g, '');
    return textContent;
}

async function getTutorials(lang: string): Promise<Tutorial[]> {
    const tutorials = await getCollection("tutoriels", (entry: CollectionEntry<'tutoriels'>) => entry.id.startsWith(lang));
    return Promise.all(
        tutorials.map(async (tutorial: CollectionEntry<"tutoriels">) => {
            const textContent = extractTextFromMDX(tutorial.body);
            
            return {
                title: tutorial.data.title,
                slug: tutorial.slug,
                body: textContent,
            };
        })
    );
}

export const GET: APIRoute = async (context: APIContext) => {
    const lang = context.params.lang as string;
    return new Response(JSON.stringify(await getTutorials(lang)), {
        headers: {
            "Content-Type": "application/json",
        }
    });
}