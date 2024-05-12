// https://www.codewars.com/kata/5effa412233ac3002a9e471d

// For this kata you will have to forget how to add two numbers.

function add(num1, num2) {
    num1 = num1.toString().split("").reverse().join("");
    num2 = num2.toString().split("").reverse().join("");
    if (num1.length < num2.length) {
        [num1, num2] = [num2, num1];
    }
    var returnString = "";
    for (var i = 0; i < num1.length; i++) {
        var int1 = parseInt(num1[i]);
        var int2 = parseInt(num2[i] || 0);
        returnString = (int1+ int2).toString()+returnString;
    }
    return parseInt(returnString);
}