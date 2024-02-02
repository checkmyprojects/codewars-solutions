// https://www.codewars.com/kata/559f44187fa851efad000087

// Write a function that removes every lone 9 that is inbetween 7s.

function sevenAte9(str){
    return str.replace(/79(?=7)/g, '7');
}