'use strict';

const net = require('net');

const client = new net.Socket();

client.connect(3001, 'localhost', () => console.log('Socket in app.js created!'));

const events = ['create', 'update', 'read', 'delete'];

client.on('close', () => {
  console.log('Connection to app socket closed!');
});

setInterval(() => {
  let event = events[Math.floor(Math.random() * events.length)];
  let payload = {
    name: event,
    data: `A ${event} event just happened!`,
  };

  client.write(JSON.stringify(payload));
}, 500);