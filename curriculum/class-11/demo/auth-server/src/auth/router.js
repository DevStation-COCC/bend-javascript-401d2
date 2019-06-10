'use strict';

const express = require('express');
const authRouter = express.Router();

const User = require('./users-model');
const auth = require('./middleware');

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

authRouter.get('/signin', auth, (req, res) => {
  res.cookie('auth', req.token);
  res.send(req.token);
});

authRouter.get('/somesecureroute', auth, (req, res) => {

});

authRouter.post('/somesecurepostroute', auth, (req, res) => {

});

module.exports = authRouter;
