'use strict';

require('dotenv').config();

const Q = require('@nmq/q/client');

// Q.publish('database', 'create', {id: 42, name: 'Adam'});
// Q.publish('database', 'delete', {id: 42});
Q.publish('network', 'attack', {type: 'DDOS', source: 'China'});
