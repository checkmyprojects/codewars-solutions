// https://www.codewars.com/kata/5a0d38c9697598b67a000041

// You are given a string representing a number in binary. Your task is to delete all the unset bits in this string and return the corresponding number (after keeping only the '1's).

function eliminateUnsetBits(number) {
    return number=parseInt((number.split("0").join('')),2)||0;
}