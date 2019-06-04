'use strict';

module.exports = (err, req, res, next) => {
  console.error('ERROR DETECED ON SERVER!');
  console.error(err);
  res.status(500).send('oh no...this is embarassing.');
};
