import { app, HttpRequest, InvocationContext } from '@azure/functions';
import { writeFileAndLogProgress } from '../writeFileAndLogProgress';

app.http('streamRequest', {
    methods: ['POST'],
    authLevel: 'anonymous',
    handler: async (request: HttpRequest, context: InvocationContext) => {
        await writeFileAndLogProgress(request.body);

        return {
            body: 'Done!',
            status: 200,
        };
    },
});
