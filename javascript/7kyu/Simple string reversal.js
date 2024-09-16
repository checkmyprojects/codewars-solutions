// https://www.codewars.com/kata/5a71939d373c2e634200008e

// In this Kata, we are going to reverse a string while maintaining the spaces (if any) in their original place.

// For example:

// solve("our code") = "edo cruo"
// -- Normal reversal without spaces is "edocruo". 
// -- However, there is a space at index 3, so the string becomes "edo cruo"

// solve("your code rocks") = "skco redo cruoy". 
// solve("codewars") = "srawedoc"

function solve(str){
    var result = str.split(' ').join('').split('').reverse();
    str.split('').map((c, index) => {
      if(c===' ')
        result.splice(index, 0, ' ');
    });
    return result.join('');
 }