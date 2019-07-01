'use strict';

require('dotenv').config();

const Q = require('@nmq/q/client');

// Connect to the Queue server
const network = new Q('network');

// Subscribe to specific events in said Queue server
network.subscribe('attack', payload => {
  console.log('Careful, attack incoming!', payload);
});

network.subscribe('no-service', payload => {
  console.error('uh oh, service lost', payload);
});
