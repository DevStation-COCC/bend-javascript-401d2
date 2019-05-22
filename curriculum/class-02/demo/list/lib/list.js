'use strict';

class List {
  constructor(){
    this.length = 0;
    this.data = {};
  }

  push(item) {
    if(!item) throw Error('no item provided');
    this.data[this.length] = item;
    this.length++;
  }

  pop() {
    let item = this[this.length - 1];
    delete this.data[this.length - 1];
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
