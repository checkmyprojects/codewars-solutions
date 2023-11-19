// https://www.codewars.com/kata/511f11d355fe575d2c000001

// The two oldest ages function/method needs to be completed. It should take an array of numbers as its argument and return the two highest numbers within the array. The returned value should be an array in the format [second oldest age,  oldest age].

// The order of the numbers passed in could be any order. The array will always include at least 2 items. If there are two or more oldest age, then return both of them in array format.

function twoOldestAges(ages){
    return ages.sort(function(a,b){return a-b;}).slice(-2);
}