'use strict';

const io = require('socket.io-client');
const home = io.connect('http://localhost:3000/home');
const loggers = require('./loggers');

home.on('message', loggers.logPayload);
home.on('error', loggers.errorPayload);