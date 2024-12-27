// https://www.codewars.com/kata/586bca7fa44cfc833e00005c

// Create a function that takes a number and returns an array of strings containing the number cut off at each digit.

function createArrayOfTiers(num) {
    let a = []
    for (let i = 0; i < String(num).length; i++) {
      a.push(String(num).substring(0,i+1))
    }
    return a
}