// The fusc function is defined recursively as follows:

// 1. fusc(0) = 0
// 2. fusc(1) = 1
// 3. fusc(2 * n) = fusc(n)
// 4. fusc(2 * n + 1) = fusc(n) + fusc(n + 1)
// The 4 rules above are sufficient to determine the value of fusc for any non-negative input n. 
// For example, let's say you want to compute fusc(10).

// fusc(10) = fusc(5), by rule 3.
// fusc(5) = fusc(2) + fusc(3), by rule 4.
// fusc(2) = fusc(1), by rule 3.
// fusc(1) = 1, by rule 2.
// fusc(3) = fusc(1) + fusc(2) by rule 4.

// const {assert} = require('chai');

// describe('Tests', () => {
//   function test(n, expected) {
//     let actual = fusc(n);
//     let message = `Test failed for n = ${n}`;
//     assert.strictEqual(actual, expected, message);
//   }

//   it('Sample Tests', () => {
//     test(0, 0);
//     test(1, 1);
//     test(2, 1);
//     test(3, 2);
//     test(19, 7);
//     test(42, 8);
//     test(85, 21);
//   });
// });


function fusc(n) {

    if(n === 0) return 0
    if(n === 1) return 1
    if(n % 2 === 0) return fusc(n/2)
    if(n % 2 !== 0) return fusc((n-1)/2) + fusc((n-1)/2 + 1)
  }

  console.log(fusc(2))