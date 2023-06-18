// Time to test your basic knowledge in functions! Return the odds from a list:

// [1, 2, 3, 4, 5]  -->  [1, 3, 5]
// [2, 4, 6]        -->  []

// https://www.codewars.com/kata/559f80b87fa8512e3e0000f5

function odds(values){
    return values.filter(item => item%2)
  }