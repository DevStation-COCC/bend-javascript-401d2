'use strict';

const express = require('express');
const authRouter = express.Router();

const User = require('./users-model');
const auth = require('./middleware');
const oauth = require('./oauth/google');

authRouter.post('/signup', (req, res, next) => {
  let user = new User(req.body);
  user.save()
    .then(user => {
      req.token = user.generateToken();
      req.user = user;
      res.set('token', req.token);
      res.cookie('auth', req.token);
      res.send(req.token);
    })
    .catch(next);
});

// eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVkMDEyYTdmYjQ1NjJhZjVkMzA4YmI3ZiIsImNhcGFiaWxpdGllcyI6ImFkbWluIiwiaWF0IjoxNTYwMzU3NTA0LCJleHAiOjE1NjAzNTc4MDR9.SLEXGAWG4QnLrZbSuVQO4LibO3yRBSI6ymXfmLUKTis

// eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVkMDEyYTdmYjQ1NjJhZjVkMzA4YmI3ZiIsImNhcGFiaWxpdGllcyI6ImFkbWluIiwiaWF0IjoxNTYwMzU3NTU3LCJleHAiOjE1NjAzNTc4NTd9.Ur0GTyI1x5yA6btJjF58hqaez8c2qwu16JzrfsZX6Uc

authRouter.get('/signin', auth, (req, res) => {
  res.cookie('auth', req.token);
  res.send(req.token);
});

authRouter.get('/oauth', (req, res, next) => {
  oauth.authorize(req)
    .then(token => {
      res.send(token);
    })
    .catch(next);
});

module.exports = authRouter;
