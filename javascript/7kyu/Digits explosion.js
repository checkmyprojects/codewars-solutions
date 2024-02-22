// https://www.codewars.com/kata/585b1fafe08bae9988000314

// Given a string made of digits [0-9], return a string where each digit is repeated a number of times equals to its value. 

function explode(s) {
    return s.split("").map((e) => e.repeat(+e)).join("");
}