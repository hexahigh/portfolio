import CloudConvert from 'cloudconvert';

/** @type {import('./$types').PageServerLoad} */
export async function load( { url} ) {
    const fileUrl = (url.searchParams.get('url'));
    const cloudConvert = new CloudConvert('');

    let job = await cloudConvert.jobs.create({
        tasks: {
            'import-my-file': {
                operation: 'import/url',
                url: url.searchParams.get('url')
            },
            'convert-my-file': {
                operation: 'convert',
                input: 'import-my-file',
                output_format: 'mp3'
            },
            'export-my-file': {
                operation: 'export/url',
                input: 'convert-my-file'
            }
        }
    });

    return new Response(job);
}