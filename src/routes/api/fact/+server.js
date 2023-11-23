import facts from "./facts"

/** @type {import('./$types').RequestHandler} */
export async function GET({ request }) {
    const fact = facts[Math.floor(Math.random()*facts.length)];

    return new Response(fact)
}