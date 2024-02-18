// https://www.codewars.com/kata/5af15a37de4c7f223e00012d

// Given an array/list [] of n integers , Separate The even numbers from the odds , or Separate the men from the boys 

function menFromBoys(arr){
    arr = Array.from(new Set(arr));
    let odd = arr.filter(a => a % 2).sort((a, b) => b - a);
    let even = arr.filter(a => a % 2 === 0).sort((a, b) => a - b);
    return even.concat(odd);
}