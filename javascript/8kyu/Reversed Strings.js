// Complete the solution so that it reverses the string passed into it.

// 'world'  =>  'dlrow'
// 'word'   =>  'drow'
// https://www.codewars.com/kata/5168bb5dfe9a00b126000018
function solution(str){
    let invert ="";
    for (i=str.length-1; i>=0;i--){
        invert += str[i];
    }
    return invert;
}