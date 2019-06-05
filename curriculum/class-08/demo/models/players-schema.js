'use strict';

const mongoose = require('mongoose');

const players = mongoose.Schema({
  name: {type:String, required:true},
  bats: {type:String, required:true, uppercase:true, enum:['R', 'L', 'S']},
  teams: {type:String, required:true},
});

module.exports = mongoose.model('players', players);
