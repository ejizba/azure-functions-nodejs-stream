import { inputFileSize, inputFilePath, tempDir } from '../constants';
import { WriteStream, createWriteStream } from 'fs';
import { access, mkdir } from 'fs/promises';

async function createInputFile(): Promise<void> {
    // create temp dir if it doesn't exist
    try {
        await access(tempDir);
    } catch {
        await mkdir(tempDir);
    }

    const file = createWriteStream(inputFilePath);
    let length = 0;
    const data = Buffer.from(
        'Azure Functions is an event-driven, serverless compute platform that helps you develop more efficiently using the programming language of your choice.\n'
    );
    while (length < inputFileSize) {
        length += data.length;
        await writeData(file, data);
    }
    file.close();
}

async function writeData(stream: WriteStream, data: Buffer): Promise<void> {
    await new Promise<void>((resolve) => {
        if (stream.write(data)) {
            resolve();
        } else {
            stream.once('drain', resolve);
        }
    });
}

void createInputFile();
