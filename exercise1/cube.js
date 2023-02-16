// Cubes in the box
// Your job is to write a function f(x,y,z) 
// to count how many cubes of any size can fit inside a x*y*z box. 
// For example, a 2*2*3 box has 12 1*1*1 cubes, 2 2*2*2 cubes, so a total of 14 cubes in the end. 
// See the animation below for a visual description of the task!

// Notes:
// x,y,z are strictly positive and will not be too big.


// const chai = require("chai");
// const assert = chai.assert;
// chai.config.truncateThreshold = 0;

// describe("Fixed tests", function() {
//   it("2*2*3", function() {
//     assert.strictEqual(f(2,2,3), 14);
//   });
  
//   it("3*4*2", function() {
//     assert.strictEqual(f(3,4,2), 30);
//   });
// });


function f(x,y,z){
    //TODO: your code here

    let min = Math.min(x,y,z);

    let sum = 0;

    for(let i = 0; i < min; i++){
        sum += (x - i) * (y - i ) * (z - i);
    }

    return sum;
  }

  console.log(f(2,2,3))