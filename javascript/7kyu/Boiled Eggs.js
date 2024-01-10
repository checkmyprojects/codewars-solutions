// https://www.codewars.com/kata/52b5247074ea613a09000164

// Implement a function, which takes a non-negative integer, representing the number of eggs to boil. It must return the time in minutes (integer), which it takes to have all the eggs boiled.

function cookingTime(eggs) {
    var maxEggs = 8;
    var time = 5;
    return Math.ceil( eggs / maxEggs ) * time;
}