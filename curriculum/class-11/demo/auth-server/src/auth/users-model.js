'use strict';

const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const users = new mongoose.Schema({
  username: {type:String, required:true, unique: true},
  password: {type:String, required:true},
  email: {type:String},
  role: {type:String, required:true, default:'user', enum:['admin', 'editor', 'user']},
});

users.pre('save', function(){
  bcrypt.hash(this.password, 5)
    .then(hashedPassword => {
      this.password = hashedPassword;
    })
    .catch(error => error);
});

users.statics.authenticateBasic = function(auth){
  let query = {username: auth.username};
  return this.findOne(query)
    .then(user => {
      if(user && user.comparePassword(auth.password)){
        console.log(user);
        return user;
      }
    })
    .catch(console.error);
};

users.methods.comparePassword = function(password){
  return bcrypt.compare(password, this.password)
    .then(valid => valid ? this : null);
};

users.methods.generateToken = function(){
  let tokenData = {
    id: this._id,
    capabilities: this.role,
  };

  return jwt.sign(tokenData, process.env.SECRET, {expiresIn: '5m'});
};

module.exports = mongoose.model('users', users);
