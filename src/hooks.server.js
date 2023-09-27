export async function handle({ request, resolve }) {
    let ip, page, ua;

    if (request.headers) {
        ip = request.headers.get('x-forwarded-for') || request.headers.get('remote_addr');
        page = request.headers.get('referer');
        ua = request.headers.get('user-agent');
    }

    if (ip && page && ua) {
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
    }

    const response = await resolve(request);

    return response;
}
