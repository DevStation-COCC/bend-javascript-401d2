'use strict';

const homeLoggers = require('../../home/loggers');

describe('homeLogger', () => {
  describe('logPayload', () => {
    it('should run console log once', () => {
      // Arrange
      let logSpy = jest.spyOn(console, 'log');
      let errorSpy = jest.spyOn(console, 'error');

      // Act
      homeLoggers.logPayload('foo');

      // Assert
      expect(logSpy).toHaveBeenCalledTimes(1);
      expect(errorSpy).not.toHaveBeenCalled();
      logSpy.mockRestore();
      errorSpy.mockRestore();
    });
  });

  describe('logPayload', () => {
    it('should run console log once', () => {
      // Arrange
      let logSpy = jest.spyOn(console, 'log');
      let errorSpy = jest.spyOn(console, 'error');

      // Act
      homeLoggers.errorPayload('foo');

      // Assert
      expect(errorSpy).toHaveBeenCalledTimes(1);
      expect(logSpy).not.toHaveBeenCalled();
      logSpy.mockRestore();
      errorSpy.mockRestore();
    });
  });
});