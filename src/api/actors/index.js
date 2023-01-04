import express from 'express';
import {actors} from './actorsData';
import uniqid from 'uniqid';
import actorModel from './actorModel';
import asyncHandler from 'express-async-handler';

const router = express.Router();
router.get('/', asyncHandler(async (req, res) => {
    let { page = 1, limit = 10 } = req.query; // destructure page and limit and set default values
    [page, limit] = [+page, +limit]; //trick to convert to numeric (req.query will contain string values)

    const totalDocumentsPromise = actorModel.estimatedDocumentCount(); //Kick off async calls
    const actorsPromise = actorModel.find().limit(limit).skip((page - 1) * limit);

    const totalDocuments = await totalDocumentsPromise; //wait for the above promises to be fulfilled
    const actors = await actorsPromise;

    const returnObject = { page: page, total_pages: Math.ceil(totalDocuments / limit), total_results: totalDocuments, results: actors };//construct return Object and insert into response object

    res.status(200).json(returnObject);
}));

export default router;
