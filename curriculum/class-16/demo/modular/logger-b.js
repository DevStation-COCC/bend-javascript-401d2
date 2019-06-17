'use strict';

const events = require('./event-b.js');

function log(event, payload){
  let time = new Date();
  console.log({event: event.toUpperCase(), time, payload});
}

events.on('log', log);