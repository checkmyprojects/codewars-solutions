// https://www.codewars.com/kata/5a651865fd56cb55760000e0

// Definition

// An element is leader if it is greater than The Sum all the elements to its right side.
// Task

// Given an array/list [] of integers , Find all the LEADERS in the array.
// Notes

//     Array/list size is at least 3 .
//     Array/list's numbers Will be mixture of positives , negatives and zeros
//     Repetition of numbers in the array/list could occur.
//     Returned Array/list should store the leading numbers in the same order in the original array/list .

var arrayLeaders = numbers => {
    let answer = [];
    for (let i=0; i<numbers.length; i++){ 
      let sum = 0;
      for (let j=i+1; j<numbers.length; j++){ 
        sum += numbers[j];
      }
      
      if(numbers[i] > sum){
        answer.push(numbers[i]);
      }
    }
    return answer;
  }