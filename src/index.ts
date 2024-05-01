import { app } from '@azure/functions';
import { enableHttpStream } from './constants';

app.setup({ enableHttpStream });
