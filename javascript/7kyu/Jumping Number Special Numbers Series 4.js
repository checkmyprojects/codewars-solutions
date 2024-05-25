// https://www.codewars.com/kata/5a54e796b3bfa8932c0000ed

// Definition

// Jumping number is the number that All adjacent digits in it differ by 1.
// Task

// Given a number, Find if it is Jumping or not . 

function jumpingNumber(n){
    let arr = n.toString().split('')
    for(i=0; i < arr.length-1; i++){
      if(Math.abs(arr[i] - arr[i+1]) !== 1 ){
        return 'Not!!'
      }
    }
    return 'Jumping!!'
}