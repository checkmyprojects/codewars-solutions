// https://www.codewars.com/kata/5a87449ab1710171300000fd

// A Tidy number is a number whose digits are in non-decreasing order.
// Given a number, Find if it is Tidy or not . 

function tidyNumber(n) {
  return n.toString().split('').map(Number).sort((a, b) => a - b).join('') == n.toString();
}