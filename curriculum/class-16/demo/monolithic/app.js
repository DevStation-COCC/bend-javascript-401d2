'use strict';

const eventEmitter = require('events');

const events = new eventEmitter();

const logEventName = 'log';

events.on(logEventName, myLoggerHandler);
events.on('save', handleSave);
// events.on('delete', payload => myLoggerHandler('delete', payload));
events.on('delete', handleDelete);

// Event handlers
function handleDelete(payload){
  events.emit('log', 'delete', payload);
}

function handleSave(payload){
  console.log(`Record ${payload.id} was saved!`);
  events.emit('log', 'save', payload);
}

function myLoggerHandler(eventName, payload){
  let time = new Date();
  console.log({eventName, time, payload});
}

// events.emit(logEventName, 'whatever i want', {paylod: 'this is a logged payload'});
events.emit('save', {id: 42});
events.emit('delete', {id: 24});
