// This kata is all about adding numbers.

// You will create a function named add. It will return the sum of all the arguments. 
// Sounds easy, doesn't it?

// Well Here's the Twist. The inputs will gradually decrease with their index as parameter 
// to the function.

//   add(3,4,6); 
//   /*
//   returns ( 3 / 1 ) + ( 4 / 2 ) + ( 6 / 3 ) = 7
//   */
// Remember the function will return 0 if no arguments are passed and it must round the 
// result if sum is a float.

// Example

//   add(); //=> 0
//   add(1,2,3); //=> 3
//   add(1,4,-6,20); //=> 6


// const chai = require("chai");
// const assert = chai.assert;
// chai.config.truncateThreshold=0;

// describe("Sample tests", () => {
//   it("add() = 0", () => {
//     assert.strictEqual(add(), 0);
//   });
  
//   it("add(100, 200, 300) = 300", () => {
//     assert.strictEqual(add(100, 200, 300), 300);
//   });
  
//   it("add(2) = 2", () => {
//     assert.strictEqual(add(2), 2);
//   });
  
//   it("add(4, -3, -2) = 2", () => {
//     assert.strictEqual(add(4, -3, -2), 2);
//   });
  
//   it("add(-1, -2, -3, -4) = -4", () => {
//     assert.strictEqual(add(-1, -2, -3, -4), -4);
//   });
// });

//pseudocode
//1. find the index of the argument
//2. divide the arguement by the index
//3. add all and return it


function add() {

    let sum = 0;

    for(let i = 0; i < arguments.length; i++){
        sum += arguments[i] / (i + 1)
    }

    return Math.round(sum);
  

}

console.log(add(100,200,300));
