'use strict';

class Stack {
  constructor(){
    this.storage = new Array();
    this.top = null;
  }

  push(item){
    if(!item) return false;
    this.storage.push(item);
    this.top = item;
  }

  peek(){
    return this.top;
  }

}

module.exports = Stack;