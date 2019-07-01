'use strict';

const io = require('socket.io-client');
const socket = io.connect('http://localhost:3000');
const devstation = io.connect('http://localhost:3000/devstation');
const home = io.connect('http://localhost:3000/home');


const faker = require('faker');

socket.emit('speak', faker.finance.bitcoinAddress());

devstation.emit('speak', faker.internet.domainName());
home.emit('speak', faker.company.catchPhrase());