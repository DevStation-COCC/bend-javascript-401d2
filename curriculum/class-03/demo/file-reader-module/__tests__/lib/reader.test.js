'use strict';

// When mocking out embedded modules like fs or buffer, you have to tell jest to mock it
// For 3rd party modules, you can "auto" mock them by simply putting them in the correct __mocks__ folder
jest.mock('fs');

const reader = require('../../lib/reader.js');

describe('File Reader Module', () => {
  it('returns an error when given a bad file', (done) => {
    let file = 'bad.txt';
    reader(file, (err, data) => {
      expect(err).toBeDefined();
      done();
    });
  });

  it('returns file contents when given a good file', (done) => {
    let file = 'file.txt';
    reader(file, (err, data) => {
      expect(err).toBeNull();
      expect(typeof data).toBe('string');
      done();
    });
  });
});
