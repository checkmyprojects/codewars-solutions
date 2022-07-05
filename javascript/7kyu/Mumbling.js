// This time no story, no theory. The examples below show you how to write function accum:
// Examples:

// accum("abcd") -> "A-Bb-Ccc-Dddd"
// accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
// accum("cwAt") -> "C-Ww-Aaa-Tttt"

// The parameter of accum is a string which includes only letters from a..z and A..Z.

// https://www.codewars.com/kata/5667e8f4e3f572a8f2000039

function accum(s) {
    result = ''
      for(let i=1; i<=s.length; i++){
      
      for(let j=1; j<=i; j++){
        if(j===1){
          result += s[i-1].toUpperCase()  
        }else{
          result += s[i-1].toLowerCase()    
        }
        
      }
      if(i!=s.length){
        result += '-'  
      }
    }
    return result
}