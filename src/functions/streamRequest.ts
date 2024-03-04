import { app, HttpRequest, InvocationContext } from '@azure/functions';
import { writeOutputFile } from '../writeOutputFile';

export const handler = async (request: HttpRequest, context: InvocationContext) => {
    await writeOutputFile(request.body);

    return {
        body: 'Done!',
        status: 200,
    };
};



