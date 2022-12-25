
//Write a function that checks if a given string (case insensitive) is a palindrome.


// reverse the string
//check if it is equal to initial string
// if yes return true else return false



function isPalindrome(x) {
    // your code here

    let res = x;
    let str = x.split("");
    let rev = str.reverse().join("");

    if (res.toLowerCase() == rev.toLowerCase()){
        return true;
    } else {
        return false;
    }

  }

  console.log(isPalindrome(""))