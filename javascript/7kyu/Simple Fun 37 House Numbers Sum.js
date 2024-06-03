// https://www.codewars.com/kata/58880c6e79a0a3e459000004

// Task

// A boy is walking a long way from school to his home. To make the walk more fun he decides to add up all the numbers of the houses that he passes by during his walk. Unfortunately, not all of the houses have numbers written on them, and on top of that the boy is regularly taking turns to change streets, so the numbers don't appear to him in any particular order.

// At some point during the walk the boy encounters a house with number 0 written on it, which surprises him so much that he stops adding numbers to his total right after seeing that house.

// For the given sequence of houses determine the sum that the boy will get. It is guaranteed that there will always be at least one 0 house on the path.

function houseNumbersSum(inputArray) {
    for (let sum = 0, i = 0; ; i++)
      if (inputArray[i] === 0) return sum
      else sum += inputArray[i]
}