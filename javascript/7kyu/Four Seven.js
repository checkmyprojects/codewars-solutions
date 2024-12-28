// https://www.codewars.com/kata/5ff50f64c0afc50008861bf0

// Simple kata, simple rules: your function should accept the inputs 4 and 7. If 4 is entered, the function should return 7. If 7 is entered, the function should return 4. Anything else entered as input should return 0. There's only one catch, your function cannot include if statements, switch statements, or the ternary operator.

function fourSeven(n){
    let results = {
      7 : 4,
      4 : 7,
    }
    return results[n] || 0
  }