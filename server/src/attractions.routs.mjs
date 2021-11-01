import express from 'express';
import { getAttractions } from './attractions.services.mjs';
import { getAttrTypes } from './attractions.services.mjs';


export const AttractionsRouter = express.Router();

AttractionsRouter.get('/', async (req, res) => {
    const {lat, long, type} = req.query;
    res.send(await getAttractions(lat, long, type));
});


AttractionsRouter.get('/types', async (req, res) => {
    res.send(await getAttrTypes());
});

