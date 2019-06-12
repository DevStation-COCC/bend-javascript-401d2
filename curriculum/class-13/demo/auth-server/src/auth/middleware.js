'use strict';

const User = require('./users-model.js');

module.exports = (req, res, next) => {

  try{
    // get Basic Authorization header info
    let [authType, authString] = req.headers.authorization.split(/\s+/);

    switch(authType.toLowerCase()){
    case 'basic':
      // do basic auth
      return _authBasic(authString);
    case 'bearer':
      return _authBearer(authString);
    default:
      // do error
      _authError();
    }
  }catch(e){
    _authError();
  }

  function _authBasic(authString){
    let base64Buffer = Buffer.from(authString, 'base64');
    let bufferString = base64Buffer.toString();
    let [username, password] = bufferString.split(':');
    let auth = {username, password};

    return User.authenticateBasic(auth)
      .then(user => _authenticate(user))
      .catch(next);
  }

  function _authBearer(authString){
    return User.authenticateBearer(authString)
      .then(user => _authenticate(user))
      .catch(next);
  }

  function _authenticate(user){
    if(user){
      req.user = user;
      req.token = user.generateToken();
      next();
    }else{
      _authError();
    }
  }

  function _authError(){
    next({status: 401, statusMessage: 'Unauthorized', message: 'Invalid User ID/password'});
  }
};

