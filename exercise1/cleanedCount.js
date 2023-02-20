// A researcher is studying cell division in a large number of samples. 
// Counting the cells in each sample is automated, but when she looks at the data, 
// she immediately notices that something is wrong.

// The data are arrays of integers corresponding to the number of cells in the sample over time. 
// The first element data[0] is the initial count. 
// The next element data[1] is the cell count at a later time. data[2] is the next count, 
// and so on.

// The cells are reproducing, so the elements of the array are supposed to be non-decreasing 
// (there is no cell death), but the automatic cell counter has undercounted. In fact, 
// the researcher has verified that the counter undercounts by 1 at random. The error rate is unknown.

// Your task is to create a new non-decreasing array that is minimally different from the data array. 
// For example, if the data = [1, 1, 2, 2, 1, 2, 2, 2, 2] 
// then the returned array should be [1, 1, 2, 2, 2, 2, 2, 2, 2] because data[4] < data[3] 
// is clearly an error.

// The first entry of the array is correct, and does not require an adjustment.
// The array will never be empty.


// const {assert,config} = require("chai"); config.truncateThreshold = 0;

// describe("Noisy Cell Counts", function() {
//   it("should not modify input array", function() {
//     const data = [10,11,10];
//     const actual = cleanedCounts(data);
//     assert.deepEqual( actual, [10,11,11], `cleanedCounts [10,11,10]` );
//     assert.deepEqual( data, [10,11,10], `input array was modified` );
//   });
//   it("example tests", function() {
//     assert.deepEqual( cleanedCounts([1,1,2,2,1,2,2,2,2]), [1,1,2,2,2,2,2,2,2], `cleanedCounts [1,1,2,2,1,2,2,2,2]` );
//     assert.deepEqual( cleanedCounts([2,1,2]), [2,2,2], `cleanedCounts [2,1,2]` );
//     assert.deepEqual( cleanedCounts([4,4,4,4]), [4,4,4,4], `cleanedCounts [4,4,4,4]` );
//     assert.deepEqual( cleanedCounts([5,5,6,5,5,5,5,6]), [5,5,6,6,6,6,6,6], `cleanedCounts [5,5,6,5,5,5,5,6]` );
//   });
// });

// STEPS
//lOOP through the element in the array
// check if the next element is less than the preveious element
// if yes increase it by one


function cleanedCounts(data) {

   let array = [...data];

   for(let i = 0; i < array.length; i++){
    
    if(array[i] > array[i + 1]){
        array[i + 1] = array[i];

        
    }

    
   
   }

   return array;
  }

  console.log(cleanedCounts([1,1,2,2,1,2,2,2,2]))