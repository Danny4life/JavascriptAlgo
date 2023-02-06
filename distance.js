// This series of katas will introduce you to basics of doing geometry with computers.

// Point objects have attributes x and y (X and Y in C#).

// Write a function calculating distance between Point a and Point b.

// Tests compare expected result and actual answer with tolerance of 1e-6.


// const assert = require('chai').assert;

// describe("Solution", function(){
//   it("should pass these sample tests", function(){
//     doTest(new Point(    3,    3), new Point(  3,    3),         0);
//     doTest(new Point(    1,    6), new Point(  4,    2),         5);
//     doTest(new Point(-10.2, 12.5), new Point(0.3, 14.7), 10.728001);
//   });


function distanceBetweenPoints(a, b) {

    //formula
    //let d = Math.sqrt[(x2 - x1) + (y2 - y1)]

// a(x1, y1) and b(x2,y2)

// b == x
// a == y
  
let newB = b[0] - a[0];
let bRes = Math.pow(newB, 2)

let newA = b[1] - a[1]
let aRes = Math.pow(newA, 2);

let finalRes = aRes + bRes;


  return Math.sqrt(finalRes);

  //return Math.sqrt(Math.pow(a.x - b.x, 2) + Math.pow(a.y - b.y, 2));
}

console.log(distanceBetweenPoints([-10.2,12.5], [0.3,14.7]))

