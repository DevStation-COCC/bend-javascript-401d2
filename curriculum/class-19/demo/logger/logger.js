'use strict';

require('dotenv').config();

const Q = require('@nmq/q/client');

const db = new Q('database'); // Connect to database Queue
const network = new Q('network');

const dbEvents = ['create', 'read', 'update', 'delete'];

dbEvents.forEach(event => {
  db.subscribe(event, payload => {
    console.log(`${event} happened`, payload);
  });
});

network.subscribe('attack', payload => {
  console.log('RUN FOR IT!');
});

console.log(db.subscriptions());
console.log(network.subscriptions());

