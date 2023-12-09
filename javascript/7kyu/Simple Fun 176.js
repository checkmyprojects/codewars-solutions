// https://www.codewars.com/kata/58b8c94b7df3f116eb00005b

// Given a string str, reverse it and omit all non-alphabetic characters.

function reverseLetter(str) {
    return str.split('')
            .reverse()
            .filter(val => /[a-zA-Z]/.test(val))
            .join('');  
}