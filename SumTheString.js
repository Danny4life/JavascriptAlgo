// Create a function that takes 2 integers in form of a string as an input, 
//and outputs the sum (also as a string):

// Example: (Input1, Input2 -->Output)

// "4",  "5" --> "9"
// "34", "5" --> "39"
// "", "" --> "0"
// "2", "" --> "2"
// "-5", "3" --> "-2"
// Notes:

// If either input is an empty string, consider it as zero.

// Inputs and the expected output will never exceed the signed 32-bit integer limit (2^31 - 1)

// describe("Basic tests", () => {
//     it("Tests example test cases", () => {
//       assert.strictEqual(sumStr("4","5"), "9");
//       assert.strictEqual(sumStr("34","5"), "39");
//     });
//   });

//steps
// add input a  and input together
// return the final output as a string
//if either of the input is an empty string consider it as zero



function sumStr(a,b) {
  
    let sum = parseInt(a) + parseInt(b);

    if(a === "" && b === ""){
        return "0";
    }else if(a !== "" && b === ""){
        return a;
        
    } else if(a === "" && b !== ""){
        return b;
    }

    return sum.toString();

}

console.log(sumStr("2", "2"))