// https://www.codewars.com/kata/585a033e3a36cdc50a00011c

// Your task is to return an output string that translates an input string s by replacing each character in s with a number representing the number of times that character occurs in s and separating each number with the sep character(s).

function freqSeq(str, sep) {
    return str.split('').map((v, i, arr) => arr.filter(vi => vi === v).length).join(sep);
}