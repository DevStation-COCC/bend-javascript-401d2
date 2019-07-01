'use strict';

const logPayload = require('../logger');

describe('logger', () => {
  describe('logPayload', () => {
    it('should run console log once', () => {
      // Arrange
      let spy = jest.spyOn(console, 'log');

      // Act
      logPayload('foo');

      // Assert
      expect(spy).toHaveBeenCalledTimes(1);
      spy.mockRestore();
    });
  });
});