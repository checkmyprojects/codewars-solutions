// You can print your name on a billboard ad. Find out how much it will cost you. Each character has a default price of £30, but that can be different if you are given 2 parameters instead of 1.

// You can not use multiplier "*" operator.

// https://www.codewars.com/kata/570e8ec4127ad143660001fd


function billboard(name, price = 30){
    var totalCost = 0;
    for(i=0; i<name.length; i++){
        totalCost += price;
    } 
    return totalCost;
}