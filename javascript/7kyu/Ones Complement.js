// https://www.codewars.com/kata/59b11f57f322e5da45000254

// The Ones' Complement of a binary number is the number obtained by swapping all the 0s for 1s and all the 1s for 0s.

// For any given binary number,formatted as a string, return the Ones' Complement of that number.
// Examples

// "0"    -> "1"
// "1"    -> "0"
// "000"  -> "111"
// "1001" -> "0110"
// "1001" -> "0110"

function onesComplement(n) {
    var result = ''
    for (let i of n){
      if(i == '1'){
        result += '0'
      }else{
        result += '1'
      }
    }
    return result
}