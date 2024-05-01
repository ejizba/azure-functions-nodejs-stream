import { createReadStream } from 'fs';
import { fetch } from 'undici';
import { inputFilePath, sendRequestInChunks } from '../constants';
import { readFile } from 'fs/promises';

async function streamRequest(): Promise<void> {
    const start = Date.now();

    const url = 'http://127.0.0.1:7071/api/streamRequest';
    if (sendRequestInChunks) {
        const body = createReadStream(inputFilePath);
        await fetch(url, { method: 'POST', body, duplex: 'half' });
    } else {
        const body = await readFile(inputFilePath);
        await fetch(url, { method: 'POST', body });
    }

    const duration = (Date.now() - start) / 1000;
    console.log(`streamRequest finished in ${duration} seconds`);
}

void streamRequest();
