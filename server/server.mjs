import express from 'express';
import cors from 'cors';
import logger from 'morgan';
import './src/db/connect.mjs';
import { AttractionsRouter } from './src/attractions.routs.mjs';


export const app = express();

app.use(cors());
app.use(logger('dev'));
app.use(express.json());

app.use('/api/Attractions', AttractionsRouter);

app.use(express.static('../client/build/'));

const port = process.env.PORT || 8080;
app.listen(port);

console.log("Server is listening on http://localhost:" + port);