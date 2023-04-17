// Description:
// Remove words from the sentence if they contain exactly one exclamation mark. 
// Words are separated by a single space, without leading/trailing spaces.

// Examples
// remove("Hi!") === ""
// remove("Hi! Hi!") === ""
// remove("Hi! Hi! Hi!") === ""
// remove("Hi Hi! Hi!") === "Hi"
// remove("Hi! !Hi Hi!") === ""
// remove("Hi! Hi!! Hi!") === "Hi!!"
// remove("Hi! !Hi! Hi!") === "!Hi!"



// const strictEqual = require("chai").assert.strictEqual;

// function doTest(input, expected) {
// 	const actual = remove(input);
// 	strictEqual(actual, expected, `for string:\n"${input}"\n`);
// }

// describe("Basic Tests", function () {
// 	it("It should works for basic tests", function () {
// 		doTest("Hi!", "");
// 		doTest("Hi! Hi!", "");
// 		doTest("Hi! Hi! Hi!", "");
// 		doTest("Hi Hi! Hi!", "Hi");
// 		doTest("Hi! !Hi Hi!", "");
// 		doTest("Hi! Hi!! Hi!", "Hi!!");
// 		doTest("Hi! !Hi! Hi!", "!Hi!");
// 	});
// });

//pseudocode
// 1. check if words contain exclamation mark
// 2. if yes, remove the word

function remove (string) {
 // Split the sentence into an array of words
  const words = string.split(' ');

  // Filter out words that contain exactly one exclamation mark
  const filteredWords = words.filter(word => {
    const count = (word.match(/!/g) || []).length;
    return count !== 1;
  });

  // Join the remaining words into a sentence
  const result = filteredWords.join(' ');

  return result;
}

console.log(remove("Hi! !Hi Hi!"));