import { fetch } from 'undici';
import { writeOutputFile } from '../writeOutputFile';

async function streamResponse(): Promise<void> {
    const response = await fetch(`http://localhost:7071/api/streamResponse`, {
        method: 'GET',
    });

    await writeOutputFile(response.body);
}

void streamResponse();
