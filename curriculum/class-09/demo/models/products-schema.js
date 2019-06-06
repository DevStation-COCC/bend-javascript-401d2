'use strict';

const mongoose = require('mongoose');

const products = mongoose.Schema({
  name: { type:String, required:true },
  description: { type:String },
  price: { type:Number, required:true },
  category: {type:String, required:true},
}, {toObject:{virtuals:true}, toJSON:{virtuals:true}, id: false});

// products.virtual('category_doc', {
//   ref: 'categories',
//   localField: 'category',
//   foreignField: 'name',
// });

// products.pre('find', function(){
//   console.log('hello');
//   try{
//     this.populate('category_doc');
//   }catch(e){
//     console.error('Find Error:', e);
//   }
// });

products.pre('save', function(){
  this.name = this.name.toUpperCase();
});

products.post('save', function(){
  console.log('FINISHED SAVING:');
  console.log(this);
});

module.exports = mongoose.model('products', products );
