// https://www.codewars.com/kata/58e67378fd2d897b8a000110

// Consider a sequence of integers xs, and a target integer n. Your task is to write a function which counts how many combinations of indexes of xs meet two rules:

//     The size of the combination must be 1 less than the size of xs
//     The sum of elements corresponding to the indexes must equal n

// For example:

// xs = [5, 0, 0, 2], n = 7

// All combinations of indexes (of size 3)
// {0, 1, 2} -> 5 + 0 + 0 = 5
// {0, 1, 3} -> 5 + 0 + 2 = 7
// {0, 2, 3} -> 5 + 0 + 2 = 7
// {1, 2, 3} -> 0 + 0 + 2 = 2

// Only 2 combinations match the target -> Answer = 2

function numCombo(arr, num){
    const sum = arr.reduce((a, b) => a + b)
    return arr.filter(x => sum - x == num).length;
}