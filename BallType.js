// Create a class Ball. Ball objects should accept one argument for "ball type" when instantiated.

// If no arguments are given, ball objects should instantiate with a "ball type" of "regular."

// ball1 = new Ball();
// ball2 = new Ball("super");

// ball1.ballType     //=> "regular"
// ball2.ballType     //=> "super"


// you have a ball classs
// that takes one arguement
// if the arguement is empty return regular
// if not return super

//Steps
//-- check if ball has no arguement, if yes return regular
//-- if ball has an argument, return super


var Ball = function(ballType) {
    // your code goes here

    if(!ballType){
        return this.ballType = "regular";
    } else {
        return this.ballType = "super";
    }
  };

  console.log(Ball("supeaaa"))