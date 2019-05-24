'use strict';

module.exports = (bmp) => {

  for(let i = 0; i < bmp.colorArray.length; i += 4){
    let gray = (bmp.colorArray[i] + bmp.colorArray[i+1] + bmp.colorArray[i+2]) / 3;
    bmp.colorArray[i] = gray;
    bmp.colorArray[i+1] = gray;
    bmp.colorArray[i+2] = gray;
  }
};
