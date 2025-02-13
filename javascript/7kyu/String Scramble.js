// https://www.codewars.com/kata/5822d89270ca28c85c0000f3

// Given a string and an array of indices, rearrange the characters of the string so that each character is placed at the position specified by the corresponding index in the array.

function scramble(str, arr) {
    let output = [];
    arr.forEach((charIdx, i) => output[charIdx] = str[i])
    return output.join('');
};