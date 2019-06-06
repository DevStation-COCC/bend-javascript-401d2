'use strict';

const mongoose = require('mongoose');

const categories = mongoose.Schema({
  name: {type:String, required:true},
}, {toObject:{virtuals:true}, toJSON:{virtuals:true}, id: false});

categories.virtual('products', {
  ref: 'products',
  localField: 'name',
  foreignField: 'category',
  justOne: false,
});

categories.pre('find', function(){
  try{
    this.populate('products');
  }catch(e){
    console.error('Find Error:', e);
  }
});

module.exports = mongoose.model('categories', categories);
