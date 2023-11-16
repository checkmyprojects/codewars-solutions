// https://www.codewars.com/kata/55d1d6d5955ec6365400006d

// Given an integer as input, can you round it to the next (meaning, "greater than or equal") multiple of 5?

function roundToNext5(n){
    return Math.ceil(n/5)*5; 
}