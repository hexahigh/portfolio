import PocketBase from pocketbase

const pb = new PocketBase('https://db.080609.xyz');

export function GET({ url }) {
    const ip = url.searchParams.get('ip');
    const date = url.searchParams.get('date');

    pb.collection('homepage_analytics').create({
        ip: ip,
        time: date,
    });

}