import { getCollection } from "astro:content";
import type { APIContext, APIRoute } from "astro";
import type { CollectionEntry } from "astro:content";

const getData = async (tutorial: CollectionEntry<"tutoriels">) => {
    return {
        title: tutorial.data.title,
        slug: tutorial.slug,
        body: tutorial.body,
    };
}

const getTutorials = async () => {
    const tutorials = await getCollection("tutoriels");
    return Promise.all(tutorials.map(tutorial => getData(tutorial)));
};

export const GET: APIRoute = async (context: APIContext) => {
    return new Response(JSON.stringify(await getTutorials()), {
        headers: {
            "Content-Type": "application/json",
        }
    });
}