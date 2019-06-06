'use strict';

module.exports = (req, res, next) => {
  try{
    let modelName = req.params.model;
    req.model = require(`../models/${modelName}.js`);
    next();
  }catch(err){
    next(err);
  }
};
