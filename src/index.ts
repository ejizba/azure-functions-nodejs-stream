import { app } from '@azure/functions';
import { handler as streamRequestHandler } from './functions/streamRequest';
import { handler as streamResponseHandler } from './functions/streamResponse';

app.setup({ enableHttpStream: true });

app.http('streamRequest', {
    methods: ['POST'],
    authLevel: 'anonymous',
    handler: streamRequestHandler
});

app.http('streamResponse', {
    methods: ['GET'],
    authLevel: 'anonymous',
    handler: streamResponseHandler,
});
