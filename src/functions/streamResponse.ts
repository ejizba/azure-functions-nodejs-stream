import { app, HttpRequest, InvocationContext } from '@azure/functions';
import { createReadStream } from 'fs';
import { inputFilePath } from '../constants';

app.http('streamResponse', {
    methods: ['GET'],
    authLevel: 'anonymous',
    handler: async (request: HttpRequest, context: InvocationContext) => {
        const body = createReadStream(inputFilePath);

        return {
            body: body,
            status: 200,
        };
    },
});
