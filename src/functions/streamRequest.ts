import { app, HttpRequest, InvocationContext } from '@azure/functions';
import { writeOutputFile } from '../writeOutputFile';

app.http('streamRequest', {
    methods: ['POST'],
    authLevel: 'anonymous',
    handler: async (request: HttpRequest, context: InvocationContext) => {
        await writeOutputFile(request.body);

        return {
            body: 'Done!',
            status: 200,
        };
    },
});
