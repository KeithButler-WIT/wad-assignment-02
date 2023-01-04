import './db';
import './seedData';
import dotenv from 'dotenv';
import express from 'express';
import session from 'express-session';
import passport from './authenticate';
import moviesRouter from './api/movies';
import genresRouter from './api/genres';
import usersRouter from './api/users';
import actorsRouter from './api/actors';
import showsRouter from './api/shows';

dotenv.config();

const errHandler = (err, req, res, next) => {
  /* if the error in development then send stack trace to display whole error,
  if it's in production then just send error message  */
  if(process.env.NODE_ENV === 'production') {
    return res.status(500).send(`Something went wrong!`);
  }
  res.status(500).send(`Hey!! You caught the error 👍👍. Here's the details: ${err.stack} `);
};

const app = express();

const port = process.env.PORT;

app.use(passport.initialize());

app.use(express.json());
app.use('/api/movies', passport.authenticate('jwt', {session: false}), moviesRouter);
app.use('/api/actors', passport.authenticate('jwt', {session: false}), actorsRouter);
app.use('/api/shows', passport.authenticate('jwt', {session: false}), showsRouter);
app.use('/api/genres', genresRouter);
app.use('/api/users', usersRouter);
app.use(errHandler);

app.listen(port, () => {
  console.info(`Server running at ${port}`);
});
