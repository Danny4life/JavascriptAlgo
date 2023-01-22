// *** No Loops Allowed ***

// You will be given an array a and a value x. All you need to do is check whether 
// the provided array contains the value, without using a loop.

// Array can contain numbers or strings. x can be either. Return true if the array 
// contains the value, false if not. With strings you will need to account for case.

// Looking for more, loop-restrained fun? Check out the other kata in the series:

// No Loops 1 - Small enough?


// describe("Basic tests",() =>{
//     it('Sample tests', () => {
//       assert.strictEqual(check([66, 101], 66), true);
//       assert.strictEqual(check([80, 117, 115, 104, 45, 85, 112, 115], 45), true);
//       assert.strictEqual(check(['t', 'e', 's', 't'], 'e'), true);
//       assert.strictEqual(check(['what', 'a', 'great', 'kata'], 'kat'), false);
//     });
//   })

//STEPS
// loop through the array



function check(a,x){
 
    return (a.includes(x)) ? true : false;
    
};

console.log(check([96, 101], 96));