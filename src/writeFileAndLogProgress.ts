import { createWriteStream } from 'fs';
import { writeFile } from 'fs/promises';
import { ReadableStream } from 'stream/web';
import { fileSize, oneMb, outputFilePath } from './constants';

export async function writeFileAndLogProgress(body: ReadableStream): Promise<void> {
    // clear the file
    await writeFile(outputFilePath, '');

    const writeStream = createWriteStream(outputFilePath);

    let length = 0;
    const logPercentInterval = 10;
    let nextLogPercent = logPercentInterval;

    for await (const chunk of body.values()) {
        length += chunk.length;
        writeStream.write(chunk);

        const percent = Math.round((length / fileSize) * 100);
        if (percent >= nextLogPercent) {
            nextLogPercent += logPercentInterval;
            console.log(`Progress: ${percent}%`);
        }
    }

    console.log(`Total file size: ${Math.round(length / oneMb)}mb`);
}
