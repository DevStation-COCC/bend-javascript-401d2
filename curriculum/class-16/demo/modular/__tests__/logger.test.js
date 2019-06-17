'use strict';

const events = require('../event-a.js');
const logger = require('../logger.js');

describe('logger', () => {
  it('logs the payload on save', () => {
    let spy = jest.spyOn(console, 'log');
    // logger.log('foo', {id: 42});
    events.emit('log', 'foo', {id: 42});
    
    expect(spy).toHaveBeenCalled();
    spy.mockRestore();
  });
});

