'use strict';

module.exports = (error, req, res, next) => {
  res.status(500);
  res.statusMessage = 'Server error';
  res.json({error});
};
