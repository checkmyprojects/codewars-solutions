// https://www.codewars.com/kata/5a55f04be6be383a50000187

// Definition

// A number is a Special Number if it’s digits only consist 0, 1, 2, 3, 4 or 5

// Given a number determine if it special number or not .
// Warm-up (Highly recommended)
// Playing With Numbers Series
// Notes

//     The number passed will be positive (N > 0) .

//     All single-digit numbers within the interval [1:5] are considered as special number. 

function specialNumber(n){
    let string = n.toString()
    let valid = ['0','1','2','3','4','5']
    for(let i = 0; i < string.length; i++){
      if(!valid.includes(string[i])) return 'NOT!!'
    }
    return 'Special!!'
}