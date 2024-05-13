// https://www.codewars.com/kata/5a905c2157c562994900009d

// Given an array/list [] of integers , Construct a product array Of same size Such That prod[i] is equal to The Product of all the elements of Arr[] except Arr[i]. 

function productArray(numbers)
{
  var sum = numbers.reduce((x, y) => x * y);
  return numbers.map(x => sum / x);
}