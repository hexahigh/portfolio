import torrentStream from 'torrent-stream';
import archiver from 'archiver';

export async function streamTorrent(torrentId) {
   if (typeof torrentId !== 'string') {
      throw new Error('torrentId must be a string');
   }

   const engine = torrentStream(`magnet:${torrentId}`);

   return new Promise((resolve, reject) => {
      engine.on('ready', () => {
         const files = engine.files;
         if (files.length === 0) {
            reject(new Error('No files found in the torrent'));
            return;
         }

         const archive = archiver('tar');

         files.forEach((file) => {
            const stream = file.createReadStream();
            archive.append(stream, { name: file.name });
         });

         archive.finalize();

         resolve({
            stream: archive,
            contentType: 'application/x-tar'
         });
      });

      engine.on('error', (err) => {
         reject(err);
      });
   });
}