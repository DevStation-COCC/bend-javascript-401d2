'use strict';

let myObject = {
  foo: function() {
    console.log('foo');
  },

  bar: function() {
    console.log('bar');
  },

  baz: function(fn) {
    fn.call();
  },

  runBadly: function() {
    let me = this;

    this.baz(function(){
      me.foo();
      me.bar();
    });
  },

  runGoodly: function() {
    this.baz(function() {
      this.foo();
      this.bar();
    }.bind(this));
  }
};

// myObject.foo();
// myObject.bar();
myObject.runBadly();
myObject.runGoodly();

