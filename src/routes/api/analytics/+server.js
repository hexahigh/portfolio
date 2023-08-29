import PocketBase from 'pocketbase'

/** @type {import('./$types').RequestHandler} */
export function GET({ url }) {
    const pb = new PocketBase('https://db.080609.xyz');

    const ip = url.searchParams.get('ip');
    const page = url.searchParams.get('url');
    const ua = url.searchParams.get('ua');

    pb.collection('homepage_analytics').create({
        ip: ip,
        url: page,
        ua: ua,
    });

    return Response(sent)
}