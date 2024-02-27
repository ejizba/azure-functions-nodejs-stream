import { createReadStream } from 'fs';
import { fetch } from 'undici';
import { inputFilePath } from '../constants';

async function streamRequest(): Promise<void> {
    const body = createReadStream(inputFilePath);
    await fetch('http://localhost:7071/api/streamRequest', {
        method: 'POST',
        body,
        duplex: 'half',
    });
}

void streamRequest();
