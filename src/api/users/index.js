import express from 'express';
import User from './userModel';
import movieModel from '../movies/movieModel';
import asyncHandler from 'express-async-handler';
import jwt from 'jsonwebtoken';

const router = express.Router(); // eslint-disable-line

// Get all users
router.get('/', async (req, res) => {
    const users = await User.find();
    res.status(200).json(users);
});

// Register OR authenticate a user
router.post('/',asyncHandler( async (req, res, next) => {
    if (!req.body.username || !req.body.password) {
      res.status(401).json({success: false, msg: 'Please pass username and password.'});
      return next();
    }
    if (req.query.action === 'register') {
      if (req.body.password.match(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{5,}$/g)) {
        await User.create(req.body);
        res.status(201).json({code: 201, msg: 'Successful created new user.'});
      } else {
        res.status(401).json({code: 401,msg: 'User creation failed.'});
      }
    } else {
      const user = await User.findByUserName(req.body.username);
        if (!user) return res.status(401).json({ code: 401, msg: 'Authentication failed. User not found.' });
        user.comparePassword(req.body.password, (err, isMatch) => {
          if (isMatch && !err) {
            // if user is found and password matches, create a token
            const token = jwt.sign(user.username, process.env.SECRET);
            // return the information including token as JSON
            res.status(200).json({success: true, token: 'BEARER ' + token});
          } else {
            res.status(401).json({code: 401,msg: 'Authentication failed. Wrong password.'});
          }
        });
      }
}));

router.get('/:userName/favourites', asyncHandler( async (req, res) => {
  const userName = req.params.userName;
  const user = await User.findByUserName(userName).populate('favourites');
  res.status(200).json(user.favourites);
}));

//Add a favourite. No Error Handling Yet. Can add duplicates too!
router.post('/:userName/favourites', asyncHandler(async (req, res) => {
    const newFavourite = req.body.id;
    const userName = req.params.userName;
    const movie = await movieModel.findByMovieDBId(newFavourite);
    const user = await User.findByUserName(userName);
    // const isMatch = user.favourites._id === movie._id;
    // if (isMatch) {
    if (User.findFavourite(movie._id)) {
    // if (user.favourites.find(newFavourite)) {
    // if (user.find({ favourites: newfavourite }).count() > 0) {
    // if (user.favourites.findByMovieDBId(movie)) {
        await user.favourites.push(movie._id);
        await user.save();
        res.status(201).json({code: 201, msg: 'Successful added new favourite movie.'});
    } else {
        res.status(201).json({code: 201,msg: 'Already a favourite movie'});
    }
    res.status(201).json(user);
}));


export default router;
