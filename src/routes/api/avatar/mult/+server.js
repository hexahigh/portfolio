import { createAvatar } from '@dicebear/core';
import { identicon } from '@dicebear/collection';
import JSZip from 'jszip';

/** @type {import('@sveltejs/kit').RequestHandler} */
export async function get({ params }) {
    try {
        const { amount } = params; // Get the 'amount' parameter from the URL

        const images = [];
        for (let i = 0; i < amount; i++) {
            const avatar = createAvatar(identicon, {
                seed: makeid(30),
            });
            const data = avatar.toString();
            images.push({ name: `image${i + 1}.svg`, data });
        }

        const zip = new JSZip();
        for (const image of images) {
            zip.file(image.name, image.data);
        }

        const zipData = await zip.generateAsync({ type: 'blob' });

        return {
            headers: {
                'Content-Type': 'application/x-tar',
                'Content-Disposition': 'attachment; filename=images.tar',
            },
            body: zipData,
        };
    } catch (error) {
        console.error(error);
        return {
            status: 500,
            body: `An error occurred: ${error}`,
        };
    }
}

function makeid(length) {
    let result = '';
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const charactersLength = characters.length;
    let counter = 0;
    while (counter < length) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
        counter += 1;
    }
    return result;
}
