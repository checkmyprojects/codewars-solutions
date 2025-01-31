// https://www.codewars.com/kata/57a60bad72292d3e93000a5a

// Write function which takes a string and make an acronym of it.

// Rule of making acronym in this kata:

//     split string to words by space char
//     take every first letter from word in given string
//     uppercase it
//     join them toghether

function toAcronym( input ){
    return input.split(' ')
                .map(function(item) { return item[0].toUpperCase(); })
                .join('');
}