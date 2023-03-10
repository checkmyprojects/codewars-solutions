// There's a "3 for 2" (or "2+1" if you like) offer on mangoes. For a given quantity and price (per mango), calculate the total cost of the mangoes.

// https://www.codewars.com/kata/57a77726bb9944d000000b06

function mango(quantity, price){
    return price * (quantity - Math.floor(quantity / 3));
}