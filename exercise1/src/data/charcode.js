// You'll be given a string, and have to return the sum of all characters as an int. 
// The function should be able to handle all printable ASCII characters.

// Examples:

// uniTotal("a") == 97
// uniTotal("aaa") == 291


// const strictEqual = require('chai').assert.strictEqual;

// function doTest (string, expected) {
//   const actual = uniTotal(string);
//   strictEqual(actual, expected, `for string "${string}":\n`);
// }

// it("sample tests", () => {
//   doTest("", 0);
//   doTest("a", 97);
//   doTest("b", 98);
//   doTest("c", 99);
//   doTest("d", 100);
//   doTest("e", 101);
//   doTest("aaa", 291);
//   doTest("Mary Had A Little Lamb", 1873);
// });

//STEPS

//convert to ascii
// convert ascii to array
// then sum


function uniTotal (string) {
    // total up dem unicodes!

   
    let count = 0;

    for(let i = 0; i < string.length; i++){
        count +=  string.charCodeAt(i);
    }
    return count;
    }

    console.log(uniTotal("Mary Had A Little Lamb"));


    console.log(97+97+97)