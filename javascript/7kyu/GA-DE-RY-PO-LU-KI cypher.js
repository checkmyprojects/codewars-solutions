// https://www.codewars.com/kata/592a6ad46d6c5a62b600003f

// Your task is to help scouts to encrypt and decrypt thier messages. Write the Encode and Decode functions.
// The input string consists of lowercase and uperrcase characters and white . The substitution has to be case-sensitive. 

const dict = {
    G: "A", A: "G", D: "E", E: "D", 
    R: "Y", Y: "R", P: "O", O: "P", 
    L: "U", U: "L", K: "I", I: "K", 
    g: "a", a: "g", d: "e", e: "d", 
    r: "y", y: "r", p: "o", o: "p", 
    l: "u", u: "l", k: "i", i: "k", 
  }
  
  const encode = s => s.replace(/./g, c => dict[c] || c)
  const decode = encode