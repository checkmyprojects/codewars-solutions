// Your task is simply to count the total number of lowercase letters in a string.

// https://www.codewars.com/kata/56a946cd7bd95ccab2000055

function lowercaseCount(str){
    return (str.match(/[a-z]/g) || []).length
}