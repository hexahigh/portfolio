import { createAvatar } from '@dicebear/core';
import { identicon } from '@dicebear/collection';
import tar from 'tar';
import fs from 'fs';
import os from 'os';
import path from 'path';

/** @type {import('./$types').RequestHandler} */
export async function GET({ url }) {
    const amount = parseInt(url.searchParams.get('amount'));

    try {
        const tempDir = fs.mkdtempSync(path.join(os.tmpdir(), 'avatars-'));
        const files = [];

        for (let i = 0; i < amount; i++) {
            const avatar = createAvatar(identicon, {
                seed: makeid(30),
            });

            const filePath = path.join(tempDir, `avatar${i}.svg`);
            fs.writeFileSync(filePath, avatar);
            files.push(filePath);
        }

        const tarPath = path.join(tempDir, 'avatars.tar');
        await tar.c({
            file: tarPath,
            cwd: tempDir,
            sync: true,
        }, files);

        const data = fs.readFileSync(tarPath);

        return new Response(data, { 
            status: 200,
            headers: { 'Content-Type': 'application/x-tar' }
        });
        
    } catch (error) {
        console.error(error);
        return new Response("An error occurred: ", error, { status: 500 });
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
