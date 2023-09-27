export async function handle({ request, resolve }) {
    const headers = request.headers;
    const ip = headers.get('x-forwarded-for') || headers.get('remote_addr');
    const page = headers.get('referer');
    const ua = headers.get('user-agent');

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
