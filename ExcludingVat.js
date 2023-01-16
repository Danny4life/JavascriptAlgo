// Write a function that calculates the original product price, without VAT.

// Example
// If a product price is 200.00 and VAT is 15%, then the final product price 
// (with VAT) is: 200.00 + 15% = 230.00

// Thus, if your function receives 230.00 as input, it should return 200.00

// Notes:

// VAT is always 15% for the purposes of this Kata.
// Round the result to 2 decimal places.
// If null value given then return -1

// describe('Fixed Tests', () => {
//     it("Test", () => {
//       Test.assertSimilar(excludingVatPrice(230), 200.00);
//       Test.assertSimilar(excludingVatPrice(123), 106.96);
//     });
//   });


//STEPS
///1 get the 15% vat from the price
//2 then subtract the 15% vat gotten from the total price
//3 round the result to 2 d.c
//4 if the value given is null reurn -1;
function excludingVatPrice(price){
    // your code

    // if(price == null){
    //     return -1;
    // }
    // let vat = (15  / 100) + 1;

    // let initialPrice = price / vat

    // return initialPrice.toFixed(2);

    return (price == null) ? -1 : Math.round((price / 1.15) * 100) / 100;

  }

  console.log(excludingVatPrice(230))
  //console.log(15/100 * 200 + 200)

  //console.log(15 / 100 + 1)