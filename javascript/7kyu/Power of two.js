// https://www.codewars.com/kata/534d0a229345375d520006a0

// Complete the function power_of_two/powerOfTwo (or equivalent, depending on your language) that determines if a given non-negative integer is a power of two

function isPowerOfTwo(n){
    if(n == 1)
        return true
    if(n < 1)
        return false
    return isPowerOfTwo(n / 2)
}