'use strict';

const Stack = require('../stack');

describe('Stack Module', () => {
  let stack;
  beforeEach(() => {
    stack = new Stack();
  });

  describe('constructor', () => {
    it('creates an instance of Stack', () => {
      // Assert
      expect(stack).toBeDefined();
      expect(stack).toBeInstanceOf(Stack);
    });

    it('creates a top property with null as value', () => {
      // Assert
      expect(stack.top).toBeNull();
    });

    it('creates an empty storage property', () => {
      // Assert
      expect(stack.storage).toBeDefined();
      expect(stack.storage).toBeInstanceOf(Array);
      expect(stack.storage.length).toBe(0);
    });
  });

  describe('push(item)', () => {
    it('adds item to top of the stack', () => {
      // Arrange
      let item = {name: 'Adam'};

      // Act
      stack.push(item);

      // Assert
      expect(stack.storage[0]).toEqual(item);
      expect(stack.storage.length).toEqual(1);
      expect(stack.top).toEqual(item);
    });

    it('should not push an item when no argument given', () => {
      // Act
      stack.push();

      // Assert
      expect(stack.top).toBeNull();
    });
  });

  describe('peek()', () => {
    it('should return item at top of stack', () => {
      // Arrange
      let item = 42;
      stack.push(item);
      
      // Act
      let result = stack.peek();
      
      // Assert
      expect(result).toEqual(item);
    });

    it('does not alter the stack', () => {
      // Arrange
      let item = ['foo', 'bar'];
      stack.push(item);

      // Acct
      let result = stack.peek();
      result = stack.peek();

      // Assert
      expect(result).toEqual(item);
      expect(stack.storage.length).toEqual(1);
    });

  });
});


















