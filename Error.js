// Make a function that returns the value multiplied by 50 and increased by 6. 
// If the value entered is a string it should return "Error".


// describe("Basic tests", () => {
//     it("Testing for fixed tests", () => {
//       assert.strictEqual(problem("hello"), "Error");
//       assert.strictEqual(problem(1), 56);
//       assert.strictEqual(problem(5), 256);
//       assert.strictEqual(problem(0), 6);
//       assert.strictEqual(problem(1.2), 66);
//       assert.strictEqual(problem(3), 156);
//       assert.strictEqual(problem("RyanIsCool"), "Error");
//       assert.strictEqual(problem(-3), -144);
//       assert.strictEqual(problem(""), "Error");
//       assert.strictEqual(problem(0.03), 7.5);
//     })
//   })

//Steps
//--multiply the value by 50
//--and increase it by 6 using addition
//-- then check if value enter is a string return error
  

function problem(x){
    //your code here

    if(x === ""){
        return "Error";
    }
    let num = x * 50 + 6;

    return num ? num : "Error"; 
  }

  console.log(problem());