// https://www.codewars.com/kata/538948d4daea7dc4d200023f

// Complete the function to determine the number of bits required to convert integer A to integer B (where A and B >= 0)

// The upper limit for A and B is 216, int.MaxValue or similar.

// For example, you can change 31 to 14 by flipping the 4th and 0th bit:

function convertBits(a, b){
    var x = a ^ b, count = 0;
    do { count += x & 1 } while (x >>= 1);
    return count;
}