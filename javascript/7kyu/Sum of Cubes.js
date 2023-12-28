// https://www.codewars.com/kata/59a8570b570190d313000037

// Write a function that takes a positive integer n, sums all the cubed values from 1 to n (inclusive), and returns that sum.

function sumCubes(n) {
    return (n * (n + 1) / 2) ** 2;
}