import { streamTorrent } from './torrentStream';
import archiver from 'archiver';

export async function GET({ url }) {
   const torrentId = url.searchParams.get('link'); // Extract the torrentId from the query parameter

   if (!torrentId) {
      throw new Error('torrentId is missing');
   }

   const { stream, contentType } = await streamTorrent(torrentId);

   // Create a new Response object with the stream as the body
   const response = new Response(stream);

   // Set the Content-Type header
   response.headers.set('Content-Type', contentType);

   return response;
}
