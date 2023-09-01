import PocketBase from 'pocketbase'

/** @type {import('./$types').RequestHandler} */
export async function GET({ url }) {
    const pb = new PocketBase('https://db.080609.xyz');

    const ip = url.searchParams.get('ip');
    const page = url.searchParams.get('url');
    const ua = url.searchParams.get('ua');

    try {
        await pb.collection('homepage_analytics').create({
            ip: ip,
            url: page,
            ua: ua,
        });
        return new Response("sent", {status: 200});
    } catch (error) {
        console.error(error);
        return new Response("An error occurred: ", error, {status: 500});
    }
}
