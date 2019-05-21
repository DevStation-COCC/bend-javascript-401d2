'use strict';

class List {
  constructor(){
    this.length = 0;
  }

  push(item) {
    this[this.length] = item;
    this.length++;
  }

  pop() {
    let item = this[this.length - 1];
    delete this[this.length - 1];
    this.length--;
    return item;
  }

  map(callback) {
    let result = new List();

    for(let i = 0; i < this.length; i++){
      result.push(callback(this[i], i));
    }

    return result;
  }

}

module.exports = List;
