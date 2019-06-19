'use strict';

const io = require('socket.io-client');
const devstation = io.connect('http://localhost:3000/devstation');

devstation.on('message', payload => {
  console.log(payload);
});
