import functions from 'firebase-functions';
import express from 'express';
import cors from 'cors';
import { getDogs, testApi } from './src/dogs.js';

const app = express(); // sets up express app
app.use(cors()); // tells it to allow cross-origin resource sharing
app.use(express.json()); // allows posts with JSON bodies

// now we setup some routes...
app.get('/dogs', getDogs);

app.get('/test', testApi);

// instead of app.listen(PORT)...

// we need to 1. create a cloud function, and 2. point it to "app"
export const api = functions.https.onRequest(app);