// There's a "3 for 2" (or "2+1" if you like) offer on mangoes.
//  For a given quantity and price (per mango), calculate the total cost of the mangoes.

// Examples
// mango(2, 3) ==> 6    # 2 mangoes for $3 per unit = $6; no mango for free
// mango(3, 3) ==> 6    # 2 mangoes for $3 per unit = $6; +1 mango for free
// mango(5, 3) ==> 12   # 4 mangoes for $3 per unit = $12; +1 mango for free
// mango(9, 5) ==> 30   # 6 mangoes for $5 per unit = $30; +3 mangoes for free


// describe("Sample Tests", () => {
//     it("Should pass sample tests", () => {
//       assert.strictEqual(mango(3, 3), 6)
//       assert.strictEqual(mango(9, 5), 30)
//     });
//   });
  

//STEPS
// buy 3 mangoes and pay for only 2, get 1 free at the price of 3dollars per mango
//if you are buying 5mangos at the price of 3dol per mango
//since you will pay for 2 and get 1 free, it means you will pay for 4 at 3dol each = 12dols and get 1 free
//what if you are buying 9mangoes at the price of 5dols
function mango(quantity, price){

    let qty = quantity - Math.floor(quantity / 3);
    return qty * price;
}

console.log(mango(2, 3))
console.log(Math.floor(9/3))