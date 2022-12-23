// The Collatz conjecture (also known as 3n+1 conjecture) 
// is a conjecture that applying the following algorithm to any number 
// we will always eventually reach one:

// [This is writen in pseudocode]
// if(number is even) number = number / 2
// if(number is odd) number = 3*number + 1
// #Task

// Your task is to make a function hotpo that takes a positive n as 
// input and returns the number of times you need to perform this algorithm to get n = 1.

// #Examples

// hotpo(1) returns 0
// (1 is already 1)

// hotpo(5) returns 5
// 5 -> 16 -> 8 -> 4 -> 2 -> 1

// hotpo(6) returns 8
// 6 -> 3 -> 10 -> 5 -> 16 -> 8 -> 4 -> 2 -> 1

// hotpo(23) returns 15
// 23 -> 70 -> 35 -> 106 -> 53 -> 160 -> 80 -> 40 -> 20 -> 10 -> 5 -> 16 -> 8 -> 4 -> 2 -> 1

// explain it to urself
// given an input n
// first check if the n is even
 // if its even divide n by 2
 // then check again if its even or odd
// but if n is odd
 // do 3 * n + 1
 // keep checking for both even and odd until you get 1.


 // Steps
 //-- first check if number is even
 //-- if its even, divide number by 2
 //-- check again if the current is even, if yes divided again by 2 till it gets to 1
 // -- but if at any point of checking and the number is odd, then do 3 * number + 1
 // -- and check  again till it gets to 1.

var hotpo = function(n, acc = 0){
  

    if (n <= 1){
        return acc;
    } else {
        return hotpo(n % 2 == 0 ? n / 2 : 3 * n + 1, acc + 1);
        
    }
  
    
}

console.log(hotpo(1)); //5