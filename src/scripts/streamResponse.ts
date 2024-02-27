import { fetch } from 'undici';
import { writeFileAndLogProgress } from '../writeFileAndLogProgress';

async function streamResponse(): Promise<void> {
    const response = await fetch(`http://localhost:7071/api/streamResponse`, {
        method: 'GET',
    });

    await writeFileAndLogProgress(response.body);
}

void streamResponse();
