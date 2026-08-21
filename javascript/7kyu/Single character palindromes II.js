// https://www.codewars.com/kata/5a66ea69e6be38219f000110

// In this Kata, you will check if it is possible to convert a string to a palindrome by changing one character.

// For instance:

// solve ("abbx") = True, because we can convert 'x' to 'a' and get a palindrome. 
// solve ("abba") = False, because we cannot get a palindrome by changing any character. 
// solve ("abcba") = True. We can change the middle character. 
// solve ("aa") = False 
// solve ("ab") = True

function solve(str){
    if ( str.length % 2 === 0){
      if ( str === [...str].reverse().join('')){
        return false
      }else if([...str].reverse().filter((el,i)=> el !== str[i]).length === 2){
        return true
      }else{
        return false
      }
    }else{
      if (str === [...str].reverse().join('')){
        return true
      }else if([...str].reverse().filter((el,i)=> el !== str[i]).length === 2){
        return true
      }else{
        return false
      }
    }
}