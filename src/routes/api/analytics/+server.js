import PocketBase from pocketbase

/** @type {import('./$types').RequestHandler} */
export function GET({ url }) {
    const pb = new PocketBase('https://db.080609.xyz');

    const ip = url.searchParams.get('ip');
    const date = url.searchParams.get('date');

    pb.collection('homepage_analytics').create({
        ip: ip,
        time: date,
    });

}