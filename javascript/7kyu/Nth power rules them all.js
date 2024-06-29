// https://www.codewars.com/kata/58aed2cafab8faca1d000e20

// You are provided with an array of positive integers and an additional integer n (n > 1).
// Calculate the sum of each value in the array to the nth power. Then subtract the sum of the original array.

function modifiedSum(a, n) {
    var result=0
    for(var x = 0 ; x<a.length;x++){
      result+=Math.pow(a[x],n)-a[x]
    }
  return result
}