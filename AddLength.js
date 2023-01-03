// What if we need the length of the words separated by a space to be 
// added at the end of that same word and have it returned as an array?

// Example(Input --> Output)

// "apple ban" --> ["apple 5", "ban 3"]
// "you will win" -->["you 3", "will 4", "win 3"]
// Your task is to write a function that takes a String and returns an 
// Array/list with the length of each word added to each element .

// Note: String will have at least one element; words will always be separated by a space.

// describe("Tests", () => {
//     it("test", () => {
//   Test.assertSimilar(addLength('apple ban'),["apple 5", "ban 3"]);
//   Test.assertSimilar(addLength('you will win'),["you 3", "will 4", "win 3"]);
//     });
//   });

//STEPS
//--get the length of each words on the string
//--add the length to the end of the word
//-- returned the word as an array
  

function addLength(str) {
    //start-here
    let arr = str.split(" ");
    const wl = arr.map(word => word + " " + word.length);
    return wl;

    }
console.log(addLength("you will win"))    