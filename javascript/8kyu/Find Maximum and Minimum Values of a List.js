// Your task is to make two functions (max and min, or maximum and minimum, etc., depending on the language) that receive a list of integers as input and return, respectively, the largest and lowest number in that list.
// Examples (Input -> Output)

// * [4,6,2,1,9,63,-134,566]         -> max = 566, min = -134
// * [-52, 56, 30, 29, -54, 0, -110] -> min = -110, max = 56
// * [42, 54, 65, 87, 0]             -> min = 0, max = 87
// * [5]                             -> min = 5, max = 5

// Notes

//     You may consider that there will not be any empty arrays/vectors.

// https://www.codewars.com/kata/577a98a6ae28071780000989

let min = function(list){
    
    list.sort(function(a, b){return a-b})
    return list[0];
}

let max = function(list){
    
    list.sort(function(a, b){return a-b}).reverse()
    return list[0];
}