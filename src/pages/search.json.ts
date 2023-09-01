import { getCollection } from "astro:content";
import type { APIContext, APIRoute } from "astro";

export const GET: APIRoute = async (context: APIContext) => {
    const tutorials = await getCollection("tutoriels");
    return new Response(
        JSON.stringify(tutorials.map(tutorial => {
            return {
                title: tutorial.data.title,
                slug: tutorial.slug,
                body: tutorial.body
            };
        })),
    );
}