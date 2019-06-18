'use strict';

const events = require('./event-a.js');

// Event handler
function handleSave(payload){
  console.log(`Record ${payload.id} was saved!`);
  events.emit('log', 'save', payload);
}

function handleDelete(payload){
  console.log(`Record ${payload.id} was deleted!`);
  events.emit('log', 'delete', payload);
}

// Register Event Handlers
events.on('save', handleSave);
events.on('delete', handleDelete);
