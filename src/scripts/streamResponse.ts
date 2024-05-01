import { fetch } from 'undici';
import { writeOutputFile } from '../writeOutputFile';

async function streamResponse(): Promise<void> {
    const start = Date.now();

    const response = await fetch(`http://127.0.0.1:7071/api/streamResponse`, {
        method: 'GET',
    });

    await writeOutputFile(response.body);

    const duration = (Date.now() - start) / 1000;
    console.log(`streamResponse finished in ${duration} seconds`);
}

void streamResponse();
