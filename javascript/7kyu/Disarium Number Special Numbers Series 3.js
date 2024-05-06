// https://www.codewars.com/kata/5a53a17bfd56cb9c14000003

// Definition
// Disarium number is the number that The sum of its digits powered with their respective positions is equal to the number itself.
// Task
// Given a number, Find if it is Disarium or not . 

function disariumNumber(n){
    let number = n.toString();
    let sum = 0;
    
    for (let i=0; i<number.length; i++){
      sum += Math.pow(number[i], i+1);
    }
    
    return n === sum ? "Disarium !!" : "Not !!";
  }