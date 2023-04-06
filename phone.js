// Fix My Phone Numbers
// Oh thank goodness you're here! The last intern has completely ruined everything!

// All of our customer's phone numbers have been scrambled, and we need those phone 
// numbers to annoy them with endless sales calls!

// The Format
// Phone numbers are stored as strings and comprise 11 digits, 
// eg '02078834982' and must always start with a 0.

// However, something strange has happened and now all of the phone numbers contain lots of 
// random characters, whitespace and some are not phone numbers at all!

// For example, '02078834982' has somehow become 'efRFS:)0207ERGQREG88349F82!' 
// and there are lots more lines that we need to check.

// The Task
// Given a string, you must decide whether or not it contains a valid phone number. If it does, 
// return the corrected phone number as a string ie. '02078834982' 
// with no whitespace or special characters, else return "Not a phone number".


// const Test = require('@codewars/test-compat');

// describe("Tests", () => {
//   it("test", () => {
// Test.assertEquals(isItANum("S:)0207ERGQREG88349F82!efRF)"), "02078834982");
// Test.assertEquals(isItANum("sjfniebienvr12312312312ehfWh"), "Not a phone number");
// Test.assertEquals(isItANum("0192387415456"), "Not a phone number");
// Test.assertEquals(isItANum("v   uf  f 0tt2eg qe0b 8rtyq4eyq564()(((((165"), "02084564165");
// Test.assertEquals(isItANum("stop calling me no I have never been in an accident"), "Not a phone number");
//   });
// });

//pseudocode
/// a valid number must always start with 0, must contain 11 digits
/// 1. create an empty string
/// 2. check if the given string starts with 0
/// 3. check if the lenght of interger is 11
/// 4. look for only integers


function isItANum(str) {
// your code here;

    str = str.replace(/\s+/g, '');
    let n=`01234567890`
  let s=``
  for(let i=0;i<str.length;i++) {
    if(n.includes(str[i])) {
      s+=str[i]
    }
  }
  if(s[0]==`0` && s.length==11) {
    return s
  }else {
    return "Not a phone number"
}






}

console.log(isItANum("stop calling me no I have never been in an accident"));