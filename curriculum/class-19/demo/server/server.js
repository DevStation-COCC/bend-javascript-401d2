'use strict';

require('dotenv').config();

const Q = require('@nmq/q/server');

Q.start(); // this starts the server with no queues/rooms/namespace

const db = new Q('database');
db.monitorEvent('create');
db.monitorEvent('read');
db.monitorEvent('update');
db.monitorEvent('delete');

const network = new Q('network');
network.monitorEvent('attack');
network.monitorEvent('no-service');
