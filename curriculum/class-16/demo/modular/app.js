'use strict';

const event_a = require('./event-a.js');
const event_b = require('./event-b.js');

require('./logger.js');
require('./logger-b.js');
require('./cache.js');

// Trigger events
event_a.emit('save', {id: 77});
event_a.emit('delete', {id: 77});
// event_a.emit('log', 'custom', {id: 42});
// event_b.emit('log', 'global', {id: 42});
