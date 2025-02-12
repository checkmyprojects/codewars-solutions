// https://www.codewars.com/kata/59859f435f5d18ede7000050

// Write a function that takes a string and returns an array containing binary numbers equivalent to the ASCII codes of the characters of the string. The binary strings should be eight digits long.

// Example: 'man' should return [ '01101101', '01100001', '01101110' ]

function wordToBin(str){
    var arr=[];
    for (var i=0; i<str.length; ++i)
        arr.push(0+str[i].charCodeAt().toString(2))
    return arr;
}