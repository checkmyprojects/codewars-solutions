// https://www.codewars.com/kata/5ac54bcbb925d9b437000001

// Given a string of characters, create a function returning the middle digit in the product of each digit in the string. If the product has an even number of digits, return the middle two digits.

// You must return an integer, not a string, so if the product is e.g. 2016, return 1, not '01'.

// Not all strings will contain digits and not all inputs will be string. In those cases, return -1.

// Examples:

// 's7d8jd9' -> 7, 8, 9 -> 7 * 8 * 9 = 504 --> 0

// '8888' -> 8, 8, 8, 8, -> 8 * 8 * 8 * 8 = 4096 --> 09 --> 9

// 'abc' --> -1

function findMiddle(str){
    if ( !str || (typeof str !== 'string') || str.match(/\d/g) === null ) { return -1 };
    str = `${str.match(/\d/g).reduce((a, b)=> a * b, 1)}`;
    
    while(str.length > 2){
        str = str.slice(1, -1);
    }
    return str === '' ? -1 : parseInt(str);
}