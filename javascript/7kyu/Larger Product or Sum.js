// https://www.codewars.com/kata/5c4cb8fc3cf185147a5bdd02

// For this Kata you will be given an array of numbers and another number n. You have to find the sum of the n largest numbers of the array and the product of the n smallest numbers of the array, and compare the two.

// If the sum of the n largest numbers is higher, return "sum"
// If the product of the n smallest numbers is higher, return "product"
// If the 2 values are equal, return "same"

// Note The array will never be empty and n will always be smaller than the length of the array.

const sumOrProduct = (arr, n) => {
    const sorted = arr.sort((a, b) => a - b);
    const sum = sorted.slice(-n).reduce((acc, i) => acc + i);
    const product = sorted.slice(0, n).reduce((acc, i) => acc * i, 1);
    return sum > product ? 'sum' : sum < product ? 'product' : 'same';
}