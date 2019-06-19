'use strict';

const io = require('socket.io-client');
const socket = io.connect('http://localhost:3000');

let logMessage = payload => {
  console.log('I heard this message:', payload);
};

socket.on('message', logMessage);
