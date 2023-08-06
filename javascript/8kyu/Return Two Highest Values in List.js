// https://www.codewars.com/kata/57ab3c09bb994429df000a4a

function twoHighest(arr) {
    return [...new Set(arr)].sort((a, b) => b - a).slice(0, 2)
}