// https://www.codewars.com/kata/57f75cc397d62fc93d000059

// Given a string, turn each character into its ASCII character code and join them together to create a number - let's call this number total1:

function calc(x){
    let sum = n => [...n].reduce((a,b) => +a + +b);
    let total1 = x.replace(/./g, x => x.charCodeAt(0));
    let total2 = total1.replace(/7/g,'1');
    return sum(total1) - sum(total2);
}