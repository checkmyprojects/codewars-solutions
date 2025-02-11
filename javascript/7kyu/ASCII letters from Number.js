// https://www.codewars.com/kata/589ebcb9926baae92e000001

// You have to create a function that converts integer given as string into ASCII uppercase letters or spaces.

// All ASCII characters have their numerical order in table.

// For example,

// from ASCII table, character of number 65 is "A".

// Numbers will be next to each other, So you have to split given number to two digit long integers.

function convert(number) {
    var decoded = '';
    for(var i = 1; i < number.length; i+=2) {
        decoded += String.fromCharCode(number[i-1] + number[i]);
    }
    return decoded;
}