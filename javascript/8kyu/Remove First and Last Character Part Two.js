// You are given a string containing a sequence of character sequences separated by commas.

// Write a function which returns a new string containing the same character sequences except the first and the last ones but this time separated by spaces.

// https://www.codewars.com/kata/570597e258b58f6edc00230d

function array(arr){
    return arr.split(",").slice(1,-1).join(" ") || null;
  }