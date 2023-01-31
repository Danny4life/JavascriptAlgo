// Americans are odd people: in their buildings, the first floor is
//  actually the ground floor and there is no 13th floor (due to superstition).

// Write a function that given a floor in the american system returns the 
// floor in the european system.

// With the 1st floor being replaced by the ground floor and the 13th 
// floor being removed, the numbers move down to take their place. 
// In case of above 13, they move down by two because there are two omitted numbers below them.

// Basements (negatives) stay the same as the universal level.

// More information here

// Examples
// 1  =>  0 
// 0  =>  0
// 5  =>  4
// 15  =>  13
// -3  =>  -3

// describe("Tests", () => {
//     it("test", () => {
//       assert.strictEqual(getRealFloor( 1),  0);
//       assert.strictEqual(getRealFloor( 5),  4);
//       assert.strictEqual(getRealFloor(15), 13);
//       assert.strictEqual(getRealFloor(-2), -2);
//     });
//   });

//STEPS
// if the america floor is 1 the european floor will be 0, that is move than by 1
// but if the american floor is 15, the european floor will be 13, that is move than by 2


function getRealFloor(n) {

    if(n === 0){
        return 0;
    } else if(n > 13){
        return n - 2;
    }else if(n < 0){
        return n;
    }

    return n -1; 
}

console.log(getRealFloor(0));


  