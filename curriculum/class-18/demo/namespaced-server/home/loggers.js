'use strict';

const loggers = module.exports = {};

loggers.logPayload = payload => {
  console.log(`Logging: ${payload}`);
};

loggers.errorPayload = payload => {
  console.error(payload);
};

