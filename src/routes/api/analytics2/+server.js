import PocketBase from 'pocketbase'

/** @type {import('./$types').RequestHandler} */
export async function GET({ request }) {
    const pb = new PocketBase('https://db.080609.xyz');

    const ip = request.headers.get('x-forwarded-for') || request.headers.get('remote_addr');
    const page = request.headers.get('referer');
    const ua = request.headers.get('user-agent');
    const sec_platform = request.headers.get('Sec-Ch-Ua-Platform')
    const sec_gpc = request.headers.get('Sec-Gpc')
    const dnt = request.headers.get('Dnt')

    try {
        await pb.collection('analytics_2').create({
            ip: ip,
            url: page,
            ua: ua,
            sec_platform: sec_platform,
            sec_gpc: sec_gpc,
            dnt: dnt,
        });
        return new Response("sent", {status: 200});
    } catch (error) {
        console.error(error);
        return new Response("An error occurred: ", error, {status: 500});
    }
}
