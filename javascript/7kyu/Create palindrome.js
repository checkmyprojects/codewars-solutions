// https://www.codewars.com/kata/5b7bd90ef643c4df7400015d

// Consider the string "adfa" and the following rules:

//     Each character MUST be changed either to the one before or the one after in alphabet.
//     Characters a can only be changed to b and z to y.

// For some example strings, we get:

// "adfa" -> ["begb","beeb","bcgb","bceb"]
// "bd" -> ["ae","ac","ce","cc"]

// We see that in each example, one of the outcomes is a palindrome. That is, "beeb" and "cc".

// You will be given a lowercase string and your task is to return True if at least one of the outcomes is a palindrome or False otherwise. 

function solve(s) {
    const middle = s.length / 2;
  
    for (let i = 0; i < middle; i++) {
      const first = s[i].charCodeAt()
      const last = s[s.length - (i + 1)].charCodeAt()
      const distance = Math.abs(last - first)
      if (distance > 2 || distance === 1) return false
    }
    return true
  }