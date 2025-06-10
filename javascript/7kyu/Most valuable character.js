// https://www.codewars.com/kata/5dd5128f16eced000e4c42ba

// In this Kata, you will be given a string and your task is to return the most valuable character. The value of a character is the difference between the index of its last occurrence and the index of its first occurrence. Return the character that has the highest value. If there is a tie, return the alphabetically lowest character. [For Golang return rune]

// All inputs will be lower case.

// For example:
// solve('a') = 'a'
// solve('ab') = 'a'. Last occurrence is equal to first occurrence of each character. Return lexicographically lowest.
// solve("axyzxyz") = 'x'

function solve(st) {
    const charMap = {};
    
    for (let i = 0; i < st.length; i++) {
        const char = st[i];
        if (!charMap[char]) {
        charMap[char] = { first: i, last: i };
        } else {
        charMap[char].last = i;
        }
    }
    
    let maxDiff = -1;
    let resultChar = '';
    
    for (const [char, positions] of Object.entries(charMap)) {
        const diff = positions.last - positions.first;
        
        if (diff > maxDiff || (diff === maxDiff && char < resultChar)) {
        maxDiff = diff;
        resultChar = char;
        }
    }
    
    return resultChar;
 }