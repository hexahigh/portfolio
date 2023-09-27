import PocketBase from 'pocketbase'

export async function handle({ request, resolve }) {
    const ip = request.headers.get('x-forwarded-for') || request.headers.get('remote_addr');
    const page = request.headers.get('referer');
    const ua = request.headers.get('user-agent');

    const pb = new PocketBase('https://db.080609.xyz');

    try {
        await pb.collection('analytics_2').create({
            ip: ip,
            url: page,
            ua: ua,
        });
    } catch (error) {
        console.error(error);
    }

    const response = await resolve(request);

    return response;
}
