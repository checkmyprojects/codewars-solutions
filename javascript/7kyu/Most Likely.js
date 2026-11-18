// https://www.codewars.com/kata/56644a421b7c94c622000056

// Create a function which compares two probabilities, returning true if the first one is most likely otherwise false.

// For this exercise probability is expressed as two numbers separated by a colon e.g. a probability of 1 in 3 will be 1:3.

// So:

// Input: ('1:3','1:2') - returns false as 1 in 3 is less likely than 1 in 2.

function mostLikely(p1,p2){
  p1 = p1.split(':');
  p2 = p2.split(':');

  p1 = p1[0]/p1[1];
  p2 = p2[0]/p2[1];
  
  return (p1 > p2);
}