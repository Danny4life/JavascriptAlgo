// Given an array of numbers, check if any of the numbers are 
// the character codes for lower case vowels (a, e, i, o, u).

// If they are, change the array value to a string of that vowel.

// Return the resulting array.

// describe("Basic tests",() =>{
//     Test.assertSimilar(isVow([118,117,120,121,117,98,122,97,120,106,104,116,113,114,113,120,106]),[118,"u",120,121,"u",98,122,"a",120,106,104,116,113,114,113,120,106]);
//     Test.assertSimilar(isVow([101,121,110,113,113,103,121,121,101,107,103]),["e",121,110,113,113,103,121,121,"e",107,103]);
//     });

//Explain
// check the array of numbers and see if any correspond to any of the vowel character code
// if yes, change the number to the string of that vowel
//return the new array

//Steps
//--loop through the array
//--while looping check if any of the number is equal to any of the vowels character
//-- if it is equal change it and return the array


function isVow(a){

    
    const newArr = a.map(x => 'aeiou'.includes(y=String.fromCharCode(x)) ? y : x);

    return newArr;
}

console.log(isVow([118,117,120,121,117,98,122,97,120,106,104,116,113,114,113,120,106]));