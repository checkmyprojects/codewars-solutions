// https://www.codewars.com/kata/5676f07029da352ba2000065

// Just as the title suggested :D

// For example ->

// n = 1   # --> Should return 7
// n = 2   # --> Should return 97
// ...

// Do not mind the pattern as it is just an incident!

// And make sure to return false if the input is not an integer :D

// This might seem simple at first, it is, but keep an eye on the performance.

const largest = n => {
  "use strict"
  
  if (n <= 0 || !Number.isInteger(n)) 
    return false
    
  let p = 10 ** n - 1
  let i = 3
  
  while (i*i <= p)
    if (p%i) 
      i += 2
    else
      i = 3, p -= 2
 
  return p
}