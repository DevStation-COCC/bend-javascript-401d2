'use strict';

// Require the module under test
const hello = require('../../lib/hello.js');

describe('Hello Module', () => {

  it('requires one parameter for sayHello()', () => {
    let message = hello.sayHello();
    expect(message).toBeNull();
  });

  it('only allows one parameter', () => {
    let message = hello.sayHello('Evey', 'Adam');
    expect(message).toBeNull();
  });

  it('does not allow numeric values', () => {
    let message = hello.sayHello(1);
    expect(message).toBeNull();
  });

  it('does not allow arrays as a parameter', () => {
    let message = hello.sayHello(['Evey']);
    expect(message).toBeNull();
  });

  it('does not allow objects as a parameter', () => {
    let message = hello.sayHello({name: 'Evey'});
    expect(message).toBeNull();
  });

  it('works when given a word', () => {
    // Arrange
    let param = 'Adam';
    let expectedValue = `Hello, ${param}.`;

    // Act
    let message = hello.sayHello(param);

    // Assert
    expect(message).toEqual(expectedValue);
  });

});