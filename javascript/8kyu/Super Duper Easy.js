// Make a function that returns the value multiplied by 50 and increased by 6. If the value entered is a string it should return "Error".

// https://www.codewars.com/kata/55a5bfaa756cfede78000026

function problem(x){
    if(typeof x === 'string' || x === ""){
      return "Error"
    }else{
      return x * 50 + 6
    }
}