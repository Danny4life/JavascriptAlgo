// This is the first step to understanding FizzBuzz.

// Your inputs: a positive integer, n, greater than or equal to one. 
//n is provided, you have NO CONTROL over its value.

// Your expected output is an array of positive integers from 1 to n (inclusive).

// Your job is to write an algorithm that gets you from the input to the output.

// describe('Fixed Tests', () => {
//     it("Test", () => {
//       assert.sameOrderedMembers(preFizz(1), [1], `Array should be from 1 to 1`);
//       assert.sameOrderedMembers(preFizz(2), [1,2], `Array should be from 1 to 2`);
//       assert.sameOrderedMembers(preFizz(3), [1,2,3], `Array should be from 1 to 3`);
//       assert.sameOrderedMembers(preFizz(4), [1,2,3,4], `Array should be from 1 to 4`);
//       assert.sameOrderedMembers(preFizz(5), [1,2,3,4,5], `Array should be from 1 to 5`);
//     });
//   });

// steps
// create an empty array
// loop through the input
// push the input into the array and return it

function preFizz(n) {

    let res = [];


    for(let i = 1; i <= n; i++){
        res.push(i);
    }

    return res;
}

console.log(preFizz(5))