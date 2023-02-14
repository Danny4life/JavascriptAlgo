// In this Kata, you will be given a string and your task 
// will be to return a list of ints detailing the count of 
// uppercase letters, lowercase, numbers and special characters, as follows.

// Solve("*'&ABCDabcde12345") = [4,5,5,3]. 
// --the order is: uppercase letters, lowercase, numbers and special characters.
// More examples in the test cases.

// Good luck!


// const { assert } = require('chai');

// describe("Basic tests", function(){
//   it("Example tests", () => {
//     assert.sameOrderedMembers(solve(""),[0,0,0,0]);
//     assert.sameOrderedMembers(solve("aAbBcC"),[3,3,0,0]);
//     assert.sameOrderedMembers(solve("Codewars@codewars123.com"),[1,18,3,2]);
//     assert.sameOrderedMembers(solve("bgA5<1d-tOwUZTS8yQ"),[7,6,3,2]);
//     assert.sameOrderedMembers(solve("P*K4%>mQUDaG$h=cx2?.Czt7!Zn16p@5H"),[9,9,6,9]);
//     assert.sameOrderedMembers(solve("RYT'>s&gO-.CM9AKeH?,5317tWGpS<*x2ukXZD"),[15,8,6,9]);
//     assert.sameOrderedMembers(solve("$Cnl)Sr<7bBW-&qLHI!mY41ODe"), [10,7,3,6])
//     assert.sameOrderedMembers(solve("@mw>0=QD-iAx!rp9TaG?o&M%l$34L.nbft"), [7,13,4,10]);
//   });
// });


//STEPS
// return the counts of uppercase letters
// return the count of lowercase letters

function solve(s){
 //..

let a = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let b = "abcdefghijklmnopqrstuvwxyz";
  let c = '1234567890';
  let up = 0;
  let low = 0;
  let num = 0;
  let char = 0;
  s = s.split('');
  for(let i = 0; i < s.length; i++){
    if(a.includes(s[i])){up++};
    if(b.includes(s[i])){low++};
    if(c.includes(s[i])){num++};
    if(!a.includes(s[i]) && !b.includes(s[i]) && !c.includes(s[i])){char++};
  }
  return [up,low,num,char];

}

console.log(solve("aAbBcC"))