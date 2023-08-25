import { getCollection } from "astro:content";
import type { APIContext, APIRoute } from "astro";

export const get: APIRoute = async (context: APIContext) => {
    const tutorials = await getCollection("tutoriels");
    return {
        body: JSON.stringify(tutorials.map(tutorial => {
            return {
                title: tutorial.data.title,
                slug: tutorial.slug,
                body: tutorial.body
            };
        })),
    };
}