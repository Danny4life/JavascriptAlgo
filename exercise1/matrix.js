// Task
// Given a matrix, find its submatrix obtained by deleting the specified 
// rows and emptying the specified columns.

// Input/Output
// [input] 2D integer array matrix

// 2-dimensional array of integers.

// 1 ≤ matrix.length ≤ 10,

// 1 ≤ matrix[0].length ≤ 10,

// 0 ≤ matrix[i][j] ≤ 9.

// [input] integer array rowsToDelete

// Array of indices (0-based) of rows to be deleted.

// 0 ≤ rowsToDelete.length ≤ 5,

// 0 ≤ rowsToDelete[i] < matrix.length.

// [input] integer array columnsToDelete

// Array of indices (0-based) of columns to be deleted.

// 0 ≤ columnsToDelete.length ≤ 5,

// 0 ≤ columnsToDelete[i] < matrix[0].length.

// [output] 2D integer array

// Example
// For

// matrix = [ [1, 0, 0, 2]
//          , [0, 5, 0, 1]
//          , [0, 0, 3, 5]
//          ]
// rowsToDelete = [1]
// columnsToDelete = [0, 2]
// the output should be

// [ [0, 2]
// , [0, 5]
// ]



// const Test = require('@codewars/test-compat');

// describe("Basic Tests", function(){ 
// it("It should works for basic tests.", function(){

// Test.assertDeepEquals(constructSubmatrix([
//  [1,0,0,2], 
//  [0,5,0,1], 
//  [0,0,3,5]
//  ],[1],[0, 2]),[
//  [0,2], 
//  [0,5]])

// Test.assertDeepEquals(constructSubmatrix([
//  [1,0,0,2], 
//  [0,5,0,1], 
//  [0,0,3,5]
//  ],[],[0]),[
//  [0,0,2], 
//  [5,0,1], 
//  [0,3,5]])

// Test.assertDeepEquals(constructSubmatrix([[1]],[],[]),[[1]])

// Test.assertDeepEquals(constructSubmatrix([[1]],[],[0]),[[]])

// Test.assertDeepEquals(constructSubmatrix([[1]],[0],[0]),[])

// })})

//STEPS
// delete the specified role


function constructSubmatrix(matrix, rowsToDelete, columnsToDelete) {
  //coding and coding..
  
  const output = matrix.slice();

  rowsToDelete.sort((a, b) => b - a)
  for (const row of rowsToDelete) {
    output.splice(row, 1);
  }

  columnsToDelete.sort((a, b) => b - a)
  for (const column of columnsToDelete) {
    for (const row of output) {
      row.splice(column, 1);
    }
  }
  return output;
  
}

console.log(constructSubmatrix([[1,0,0,2], 
                                [0,5,0,1], 
                                [0,0,3,5]], [[1], [0, 2]]))