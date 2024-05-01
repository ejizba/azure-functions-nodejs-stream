import * as path from 'path';

export const repoRoot = path.join(__dirname, '..', '..');
export const tempDir = path.join(repoRoot, 'temp');
export const inputFilePath = path.join(tempDir, 'input.txt');
export const outputFilePath = path.join(tempDir, 'output.txt');

// Change this boolean to turn the streaming feature on and off
export const enableHttpStream = true;

// Change this boolean if you want to simulate different ways of sending a request
// true: request body is streamed in chunks (which will set the header "Transfer-Encoding" to "chunked")
// false: request body is loaded into memory and sent as a single buffer/chunk
export const sendRequestInChunks = true;

export const oneMb = 1024 * 1024;

// approximately 96 mb
// If you increase this past 100mb, make sure to set `FUNCTIONS_REQUEST_BODY_SIZE_LIMIT` to a higher value in your `local.settings.json`
export const inputFileSize = 96 * oneMb;
