// https://www.codewars.com/kata/59c1302ecb7fb48757000013

// Write a function that will accept two parameters: variable and type and check if type of variable is matching type. Return true if types match or false if not.

function typeValidation(variable, type) {
    return typeof variable === type;
}