// https://www.codewars.com/kata/58a5aeb893b79949eb0000f1

// Complete the method that returns true if 2 integers share at least two 1 bits, otherwise return false. For simplicity assume that all numbers are non-negative.
// Examples

//  7  =  0111 in binary
// 10  =  1010
// 15  =  1111

//     7 and 10 share only a single 1-bit (at index 2) --> false
//     7 and 15 share 3 1-bits (at indexes 1, 2, and 3) --> true
//     10 and 15 share 2 1-bits (at indexes 0 and 2) --> true

function sharedBits(a, b) {
    return (a & b).toString(2).replace(/0/g, '').length > 1
}