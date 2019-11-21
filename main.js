let util = require("./utils");

let arr1 = [[2,3,8],
            [6,1,7],
            [3,9,6]];

let arr2 = [[5,0,9],
            [4,7,1],
            [2,4,0]];

let finalResult = util.mutiplyMatrices(arr1, arr2);

if( finalResult !== null){
    util.printMatrix(finalResult);  
  }
  else {
      console.log(null);
  }
