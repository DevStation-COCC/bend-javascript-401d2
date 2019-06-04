'use strict';

/**
 * Express middleware to log the method and path of the Express Request Object
 * Example: "LOG: GET /icecream"
 * @param {Object} req - Express Request Object
 * @param {Object} res - Express Response Object
 * @param {Function} next - Express middleware callback function
 * @memberof module:middleware
 */
let logger = (req,res,next) => {
  console.log('LOG:', req.method, req.path);
  next();
};

module.exports = logger;
