// https://www.codewars.com/kata/5868812b15f0057e05000001

// You'll be given a list of two strings, and each will contain exactly one colon (":") in the middle (but not at beginning or end). The length of the strings, before and after the colon, are random.

// Your job is to return a list of two strings (in the same order as the original list), but with the characters after each colon swapped.

function tailSwap(arr) {
    let a = arr[0].split(':')
    let b = arr[1].split(':')
    
    return [`${a[0]}:${b[1]}`, `${b[0]}:${a[1]}`]
    
}