import PocketBase from 'pocketbase'

/** @type {import('./$types').RequestHandler} */
export async function GET(request) {
    const pb = new PocketBase('https://db.080609.xyz');

    const ip = request.headers.get('x-forwarded-for') || request.headers.get('remote_addr');
    const page = request.headers.get('referer');
    const ua = request.headers.get('user-agent');

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
