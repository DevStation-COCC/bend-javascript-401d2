'use strict';

const {HashTable} = require('./hashTable');

module.exports = HashTable;

let hashTable = new HashTable(5);

hashTable.add('cat', 42);
hashTable.add('foo', 55);
hashTable.add('bbt', 24);
hashTable.prettyPrint();
