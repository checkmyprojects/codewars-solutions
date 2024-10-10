// https://www.codewars.com/kata/5982619d2671576e90000017

// You need to create a function that converts the input into this format, with the output being the same string expect there is a pattern of uppercase and lowercase letters.

function spongeMeme(sentence) {
    return sentence.split('').map((v,i) => i % 2 ? v.toLowerCase(): v.toUpperCase()).join('');
}