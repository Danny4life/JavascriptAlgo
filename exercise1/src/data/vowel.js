// When provided with a String, capitalize all vowels

// For example:

// Input : "Hello World!"

// Output : "HEllO WOrld!"

// Note: Y is not a vowel in this kata.


// const strictEqual = require('chai').assert.strictEqual;

// function doTest (input, expected) {
// 	const actual = swap(input);
// 	strictEqual(actual, expected, `for string:\n"${input}"\n`);
// }

// describe("Tests suite", () => {
// 	it("sample tests", () => {
// 		doTest("", "");
// 		doTest("   @@@", "   @@@");
// 		doTest("HelloWorld!", "HEllOWOrld!");
// 		doTest("Sunday", "SUndAy");
// 		doTest("Codewars", "COdEwArs");
// 		doTest("Monday", "MOndAy");
// 		doTest("Friday", "FrIdAy");
// 		doTest("abracadabra", "AbrAcAdAbrA");
// 		doTest("AbrAcAdAbrA", "AbrAcAdAbrA");
// 		doTest("ABRACADABRA", "ABRACADABRA");
// 		doTest("aBRaCaDaBRa", "ABRACADABRA");
// 	});
// });

// Steps
//-- declare the vowels
//-- check for vowels in the string
//-- if found capitalize it


function swap (string) {

    return string.replace(/[aeiou]/g, v => v.toUpperCase());
  }

  console.log(swap("HelloWorld!"))