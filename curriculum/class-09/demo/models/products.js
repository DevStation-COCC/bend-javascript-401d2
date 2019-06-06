'use strict';

const schema = require('./products-schema.js');
const dataModel = require('./model');

class Products extends dataModel {}

module.exports = new Products(schema);
