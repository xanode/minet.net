import { getCollection } from "astro:content";
import { remark } from "remark";
import remarkHtml from "remark-html";
import type { APIContext, APIRoute } from "astro";
import type { CollectionEntry } from "astro:content";


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

async function getTutorials(): Promise<Tutorial[]> {
    const tutorials = await getCollection("tutoriels");
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
    return new Response(JSON.stringify(await getTutorials()), {
        headers: {
            "Content-Type": "application/json",
        }
    });
}