import * as path from 'path';

export const appRoot = path.join(__dirname, '..', '..');
export const inputFilePath = path.join(appRoot, 'input_file.txt');
export const outputFilePath = path.join(appRoot, 'output_file.txt');

export const oneMb = 1024 * 1024;

// approximately 96 mb
// If you increase this past 100mb, make sure to set `FUNCTIONS_REQUEST_BODY_SIZE_LIMIT` to a higher value in your `local.settings.json`
export const fileSize = 96 * oneMb;
