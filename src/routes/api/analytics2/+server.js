import PocketBase from 'pocketbase'

/** @type {import('./$types').RequestHandler} */
export async function GET({ request }) {
    const pb = new PocketBase('https://db.080609.xyz');

    let ip = request.headers.get('x-forwarded-for') || request.headers.get('remote_addr');
    let page = request.headers.get('referer') || request.headers.get('origin') || "unknown";
    let ua = request.headers.get('user-agent');
    let sec_platform = request.headers.get('Sec-Ch-Ua-Platform')
    let sec_gpc = request.headers.get('Sec-Gpc')
    let dnt = request.headers.get('Dnt')
    let sec_platform_version = request.headers.get('Sec-CH-UA-Platform-Version')

    if(page.toLowerCase().indexOf("://boofdev.eu") == -1 || page.toLowerCase().indexOf("://pomf.080609.xyz") == -1) {
        console.log("blocked")
        return new Response("418 (I'm a teapot)", { status: 418 })
    }
    

    /*
    if(dnt == "1" || sec_gpc == "1") {
        ip = "'DNT'"
    };
    */

    try {
        await pb.collection('analytics_2').create({
            ip: ip,
            url: page,
            ua: ua,
            sec_platform: sec_platform,
            sec_platform_version: sec_platform_version,
            sec_gpc: sec_gpc,
            dnt: dnt,
        });
        return new Response("sent", {status: 200});
    } catch (error) {
        console.error(error);
        return new Response("An error occurred: ", error, {status: 500});
    }
}
