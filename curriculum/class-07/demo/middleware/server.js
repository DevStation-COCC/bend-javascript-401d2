'use strict';

const express = require('express');
let app = express();
const errorHandler = require('./mw/errorHandler');
const fourohfour = require('./mw/404');
const logger = require('./mw/logger');

// Here is some global express middleware for parsing data
// Because we define it with no "route" at the app level, it runs on every route
app.use(express.json());

let dumbMW = (req, res, next) => {
  console.log('totally not helpful');
  next();
};

let smartMW = (person) => {

  return (req, res, next) => {
    req.person = person;
    next();
  };
};

let helloWorldMW = smartMW('world');

app.use(logger);

// Hit each of these routes to see that we're getting the right things in the
// server's console log as well as the right response to the browser.
app.get('/', dumbMW, helloWorldMW, (req, res, next) => {
  console.log('In the "/" route');
  console.log(`Hello, ${req.person}`);
  res.status(200);
  res.send('All Good');

});

app.get('/a', helloWorldMW, (req, res, next) => {
  console.log('In the "/a" router');
  res.status(200).send(`Hello, ${req.person}`);
});

app.get('/b', (req, res, next) => {
  console.log('In the "/b" route');
  throw new Error('"/b" failed');
});

app.get('/c', (req, res, next) => {
  console.log('In the "/c" route');
  next('"/c" failed');
});

app.use(dumbMW);

app.use(fourohfour);
app.use(errorHandler);


app.listen(3000);




















