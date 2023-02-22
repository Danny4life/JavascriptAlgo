// In lesson #11, we learned that the for loop can be used to traverse an array. 
// If we want to traverse an object, we can use a variant of the for: for..in. 
// This can traverse all the keys of the object. An example:

// function showObjectKeys(obj){
//   for (var key in obj){
//     console.log(key);
//   }
// }
// function showObjectValues(obj){
//   for (var key in obj){
//     console.log(obj[key]);
//   }
// }
// var ob={item1:"This",item2:"is",item3:"an",item4:"example"};
// console.log("keys of ob:")
// showObjectKeys(ob);
// console.log("values of ob:")
// showObjectValues(ob);
// Code results:

// keys of ob:
// item1
// item2
// item3
// item4
// values of ob:
// This
// is
// an
// example
// for..in can also be used with arrays. Modifying the code above:

// function showObjectKeys(obj){
//   for (var key in obj){
//     console.log(key);
//   }
// }
// function showObjectValues(obj){
//   for (var key in obj){
//     console.log(obj[key]);
//   }
// }
// var arr=["one","two","three"];
// console.log("keys of arr:")
// showObjectKeys(arr);
// console.log("values of arr:")
// showObjectValues(arr);
// Code results:

// keys of arr:
// 0
// 1
// 2
// values of arr:
// one
// two
// three
// As you can see, the keys are the indices of the array elements. Important: 
// When using for..in with an array, the key (index) is always a string, 
// not a number. In the example above, the keys are "0", "1", and "2". 
// We can't see the quotes because console.log() doesn't show them.

// Although for..in can be used to traverse the array, 
// this is discouraged because in some cases the order may be unexpected. 
// So it's recommended that you use another variant for this: for..of (new in ES6). 
// for..of can traverse all the values of the array (without accessing them through their index). 
// Function showObjectValues() from above can be modified like this:

// function showArrayValues(arr){
//   for (var value of arr){
//     console.log(value);
//   }
// }
// Ok, lesson is over, let's do a task with for..in.

// Task
// The function giveMeFive accepts 1 parameter, obj, which is an object.

// Create an array (which you will eventually return). Then, traverse obj, 
// checking each key and value. If the length of the key is equal to 5, 
// then push the key to your array. Separately, if the length of the value is equal to 5, 
// then push the value to your array.

// At the end, return your array.

// You should use for..in in your code, otherwise your solution may not pass this kata.


// describe("Tests", () => {
//   it("test", () => {
//     Test.assertSimilar(giveMeFive({Our:"earth",is:"a",beautyful:"world"}),["earth","world"]);
//     Test.assertSimilar(giveMeFive({Ihave:"enough", money:"to",buy:"a",car:"model"}),["Ihave","money","model"]);
//     Test.assertSimilar(giveMeFive({Pears:"than",apple:"sweet"}),["Pears","apple","sweet"]);

//   });
// });

//STEPS
//--Transverse the object and check for each key and value
//-- check the lenght of the key, if equal to 5 push the key to the array
//-- check the leght of the value, if equal to 5 push it to the array


function giveMeFive(obj){
  //coding here
let arr = [];
let res = [];

 for(let key in obj){
    arr = obj;

    if(arr[key].length == 5){
        res.push(arr[key]);
    } 
    if(key.length == 5){
        res.push(key);
    }
 }

 return res;
  
}

    console.log(giveMeFive({Our:"earth",is:"a",beautyful:"world"}));