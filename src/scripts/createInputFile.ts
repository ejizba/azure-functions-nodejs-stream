import { open } from 'fs/promises';
import { fileSize, inputFilePath } from '../constants';

async function createInputFile(): Promise<void> {
    const file = await open(inputFilePath, 'w');
    await file.write('This is a big file', fileSize);
    await file.close();
}

void createInputFile();
