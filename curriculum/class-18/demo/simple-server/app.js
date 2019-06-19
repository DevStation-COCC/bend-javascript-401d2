'use strict';

const io = require('socket.io-client');
const socket = io.connect('http://localhost:3000');
const faker = require('faker');

let speakHakerPhrase = () => {
  socket.emit('speak', faker.hacker.phrase());
};

setInterval(speakHakerPhrase, 1000);
