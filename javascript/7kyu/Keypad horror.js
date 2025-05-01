// https://www.codewars.com/kata/5572392fee5b0180480001ae

// Solve the horror of unstandardized keypads by providing a function that converts computer input to a number as if it was typed on a phone.

function computerToPhone(numbers) {
    return numbers.split('').map(function(d) {return "0789456123"[d]; }).join('');
}