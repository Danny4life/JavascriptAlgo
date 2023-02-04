// Convert a hash into an array. Nothing more, Nothing less.

// {name: 'Jeremy', age: 24, role: 'Software Engineer'}
// should be converted into

// [["age", 24], ["name", "Jeremy"], ["role", "Software Engineer"]]
// Note: The output array should be sorted alphabetically by key name.

// Good Luck!


// describe("Basic tests",() =>{
// Test.assertDeepEquals(convertHashToArray({name: "Jeremy"}),[["name", "Jeremy"]]);
// Test.assertDeepEquals(convertHashToArray({name: "Jeremy", age: 24}),[["age", 24], ["name", "Jeremy"]]);
// Test.assertDeepEquals(convertHashToArray({name: "Jeremy", age: 24, role: "Software Engineer"}),[["age", 24], ["name", "Jeremy"], ["role", "Software Engineer"]]);
// Test.assertDeepEquals(convertHashToArray({product: "CodeWars", powerLevelOver: 9000}),[["powerLevelOver", 9000], ["product", "CodeWars"]]);
// Test.assertDeepEquals(convertHashToArray({}),[]);
// });

//steps

//conver the object into an array

//sort the array


function convertHashToArray(hash){
  //your code here - sort the keys!

  const arr = Object.entries(hash);

  return arr.sort();



  
}

console.log(convertHashToArray({name: "Jeremy", age: 24}))