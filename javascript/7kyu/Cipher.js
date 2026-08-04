// https://www.codewars.com/kata/5a19701d80171fd71d000029

// This cipher involves taking each character of a string and multiplying their char codes by 6.

// For example, encoding Hello World! would result ưɞʈʈʚÀȊʚʬʈɘÆ.

// You must write two functions:
// encode to encode a given string,
// decode to decode a given string.

// Should work on empty string too

function encode(str) {
    let encodedMsg = ''
    for(let char of str){
      encodedMsg += String.fromCharCode(char.charCodeAt(0) * 6)
    }
    return encodedMsg
}

function decode(str) {
    let decodedMsg = ''
    for(let char of str){
        decodedMsg += String.fromCharCode(char.charCodeAt(0) / 6)
    }
    return decodedMsg
}