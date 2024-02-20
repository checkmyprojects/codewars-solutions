// https://www.codewars.com/kata/55f2b110f61eb01779000053

// Given two integers a and b, which can be positive or negative, find the sum of all the integers between and including them and return it. If the two numbers are equal return a or b.

function GetSum(a,b)
{
  return (Math.abs(a - b) + 1) * (a+b) / 2;
}