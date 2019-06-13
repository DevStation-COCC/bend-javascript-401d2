'use strict';

const mongoose = require('mongoose');

const capabilities = {
  admin: ['create', 'read', 'update', 'delete'],
  editor: ['create', 'read', 'update'],
  user: ['read'],
};

const rolesSchema = new mongoose.Schema({
  role: {type:String, required:true},
  capabilities: {type:Array, required:true},
});

module.exports = mongoose.model('roles', rolesSchema);
