// https://www.codewars.com/kata/592e830e043b99888600002d

// Write a function that accepts str string and key number and returns an array of integers representing encoded str.

function encode(str, n) {
    const key = String(n)
    return Array.from(str, (c, i) => c.charCodeAt(0) - 96 + Number(key[i % key.length]))
}