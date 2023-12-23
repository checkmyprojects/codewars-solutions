// https://www.codewars.com/kata/58fa273ca6d84c158e000052

// Determine the total number of digits in the integer (n>=0) given as input to the function. For example, 9 is a single digit, 66 has 2 digits and 128685 has 6 digits. Be careful to avoid overflows/underflows.

function digits(n) {
    return n.toString().length;
}