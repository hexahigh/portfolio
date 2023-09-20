import torrentStream from 'torrent-stream';

export async function streamTorrent(torrentId) {
   if (typeof torrentId !== 'string') {
      throw new Error('torrentId must be a string');
   }

   const engine = torrentStream(`magnet:${torrentId}`);

   return new Promise((resolve, reject) => {
      engine.on('ready', () => {
         const file = engine.files.find((f) => f.name.endsWith('.mp4') || f.name.endsWith('.mkv'));
         if (!file) {
            reject(new Error('No file with the specified extension found'));
            return;
         }

         const stream = file.createReadStream();

         resolve({
            stream,
            contentType: getFileContentType(file.name)
         });
      });

      engine.on('error', (err) => {
         reject(err);
      });
   });
}

function getFileContentType(fileName) {
   if (fileName.endsWith('.mp4')) {
      return 'video/mp4';
   } else if (fileName.endsWith('.mkv')) {
      return 'video/x-matroska';
   } else {
      return 'application/octet-stream'; // fallback content type
   }
}
