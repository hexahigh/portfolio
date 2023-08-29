import PocketBase from pocketbase

const pb = new PocketBase('https://db.080609.xyz');

export async function GET({ url }) {
    const ip = url.searchParams.get('ip');
    const date = url.searchParams.get('date');

    const record = await pb.collection('homepage_analytics').create({
        ip: ip,
        time: date,
    });

}