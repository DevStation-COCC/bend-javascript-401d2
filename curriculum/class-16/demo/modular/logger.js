'use strict';

const events = require('./event-a.js');

const logger = module.exports = exports = {};

logger.log = (event, payload) => {
  let time = new Date();
  console.log({event, time, payload});
};

events.on('log', logger.log);


