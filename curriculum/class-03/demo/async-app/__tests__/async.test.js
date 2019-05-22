'use strict';

const asyncModule = require('../async.js');

let warn, log, error;

describe('async acces methods', () => {

  beforeEach(() => {
    warn = jest.spyOn(global.console, 'warn').mockImplementation(() => {});
    log = jest.spyOn(global.console, 'log').mockImplementation(() => {});
    error = jest.spyOn(global.console, 'error').mockImplementation(() => {});
  });

  afterEach(() => {
    jest.resetAllMocks();
  });

  it('runs async callback successfully', (done) => {
    // Arrange
    let things = 'hello';
    let myHandler = (err, data) => {
      // Assert
      expect(err).toBeNull();
      expect(data).toEqual(things);
      done();
    };

    // Act
    asyncModule.doerOfThings(things, myHandler);

  });

  it('runs promises (resolve)', () => {
    let data = 'do something';
    return asyncModule.promiserOfThings(data)
      .then(result => {
        expect(result).toEqual(data);
      });
  });

  it('runs promises (reject)', () => {
    return asyncModule.promiserOfThings(false)
      .then()
      .catch(err => expect(err).toBeDefined());
  });

  it('runs with async/await (good result/resolve', async () => {
    try{
      let data = 'do something';
      let result = await asyncModule.promiserOfThings(data);
      expect(result).toEqual(data);
    }catch(err){

    }

  });

  it('runs rejects async/await', async () => {
    try{
      let result = await asyncModule.promiserOfThings(false);
      expect(result).toBeUndefined();
    }catch(err){

    }
  });

});
