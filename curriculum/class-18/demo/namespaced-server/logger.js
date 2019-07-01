'use strict';

const io = require('socket.io-client');
const socket = io.connect('http://localhost:3000');

let logPayload = payload => {
  console.log(payload);
};

socket.on('message', logPayload);

module.exports = logPayload;
