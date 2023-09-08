import PocketBase from 'pocketbase'
import { createAvatar } from '@dicebear/core';
import { identicon } from '@dicebear/collection';

/** @type {import('./$types').RequestHandler} */
export async function GET() {
    try {
        const avatar = createAvatar(identicon, {
            seed: makeid(30),
          });

          const png = await avatar.png({ 
          });
        return new Response(png, {status: 200});
    } catch (error) {
        console.error(error);
        return new Response("An error occurred: ", error, {status: 500});
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