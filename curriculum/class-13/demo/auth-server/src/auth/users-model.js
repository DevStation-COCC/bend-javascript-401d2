'use strict';

const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const usedTokens = new Set();

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
        return user;
      }
    })
    .catch(console.error);
};

users.statics.authenticateBearer = function(token){

  if(usedTokens.has(token)){
    return Promise.reject('Invalid token');
  }

  let parsedToken = jwt.verify(token, process.env.SECRET);

  parsedToken.type !== 'key' && usedTokens.add(token);

  let query = {_id: parsedToken.id};
  return this.findOne(query);
};

users.methods.comparePassword = function(password){
  return bcrypt.compare(password, this.password)
    .then(valid => valid ? this : null);
};

users.methods.generateToken = function(type){
  let tokenData = {
    id: this._id,
    capabilities: this.role,
    type: type || 'user',
  };

  let options = {};
  if(tokenData.type === 'user'){
    options = {expiresIn: '5m'};
  }

  return jwt.sign(tokenData, process.env.SECRET, options);
};

users.methods.generateKey = function() {
  return this.generateToken('key');
};

users.statics.createFromOAuth = function(googleUser){
  if(!googleUser) { return Promise.reject('Validation Error'); }

  let email = googleUser.email;

  return this.findOne({email})
    .then(user => {
      if(!user) { throw new Error('User Not Found'); }
      console.log('Welcome back!');
      return user;
    })
    .catch(error => {
      console.log('creating new user');
      let username = email;
      let password = 'none';
      let role = 'user';
      return this.create({username, password, email, role});
    });
};

module.exports = mongoose.model('users', users);
