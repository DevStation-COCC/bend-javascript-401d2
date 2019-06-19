'use strict';

const io = require('socket.io-client');
const home = io.connect('http://localhost:3000/home');

home.on('message', payload => {
  console.log(payload);
});

