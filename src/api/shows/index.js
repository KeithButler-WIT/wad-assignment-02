import express from 'express';
import { shows, showDetails } from './showsData';
import uniqid from 'uniqid';
import showModel from './showModel';
import asyncHandler from 'express-async-handler';

const router = express.Router();
router.get('/', asyncHandler(async (req, res) => {
    let { page = 1, limit = 10 } = req.query; // destructure page and limit and set default values
    [page, limit] = [+page, +limit]; //trick to convert to numeric (req.query will contain string values)

    const totalDocumentsPromise = showModel.estimatedDocumentCount(); //Kick off async calls
    const showsPromise = showModel.find().limit(limit).skip((page - 1) * limit);

    const totalDocuments = await totalDocumentsPromise; //wait for the above promises to be fulfilled
    const shows = await showsPromise;

    const returnObject = { page: page, total_pages: Math.ceil(totalDocuments / limit), total_results: totalDocuments, results: shows };//construct return Object and insert into response object

    res.status(200).json(returnObject);
}));

// Get show details
router.get('/:id', asyncHandler(async (req, res) => {
    const id = parseInt(req.params.id);
    const show = await showModel.findByShowDBId(id);
    if (show) {
        res.status(200).json(show);
    } else {
        res.status(404).json({message: 'The resource you requested could not be found.', status_code: 404});
    }
}));

export default router;
