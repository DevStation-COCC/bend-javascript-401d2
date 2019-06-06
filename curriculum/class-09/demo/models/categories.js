'use strict';

const schema = require('./categories-schema');
const dataModel = require('./model');

class Categories extends dataModel {}

module.exports = new Categories(schema);
