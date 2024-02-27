import { createWriteStream } from 'fs';
import { ReadableStream } from 'stream/web';
import { oneMb, outputFilePath } from './constants';

export async function writeOutputFile(body: ReadableStream): Promise<void> {
    const writeStream = createWriteStream(outputFilePath);

    let length = 0;
    let chunkCount = 0;

    const intervalId = setInterval(() => console.log(`Progress: ${convertToMb(length)}mb`), 100);
    try {
        for await (const chunk of body.values()) {
            length += chunk.length;
            chunkCount += 1;
            writeStream.write(chunk);
        }
    } finally {
        clearInterval(intervalId);
    }

    console.log(`Done! Received ${convertToMb(length)}mb in ${chunkCount} chunks`);
}

function convertToMb(length: number): number {
    return Math.round(length / oneMb);
}
