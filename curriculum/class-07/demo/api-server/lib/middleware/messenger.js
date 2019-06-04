'use strict';

/** @module middleware */

/**
 * A useless piece of middleware
 * @param {Object} req - Express Request Object
 * @param {Object} res - Express Response Object
 * @param {Function} next - Express middleware callback function
 * @memberof module:middleware
 */
let messenger = (req,res,next) => {
  console.log('send this to the queue!');
  next();
};

module.exports = messenger;
