// https://www.codewars.com/kata/5aa1bcda373c2eb596000112

// Given an array/list [] of n integers , find maximum triplet sum in the array Without duplications .

function maxTriSum(numbers){
    numbers.sort((a, b) => b - a)
    let arr = numbers.filter((e, i) => numbers.indexOf(e) === i)
    return arr[0] + arr[1] + arr[2]
}