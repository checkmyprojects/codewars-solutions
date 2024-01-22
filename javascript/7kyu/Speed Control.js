// https://www.codewars.com/kata/56484848ba95170a8000004d

// Given s and x the task is to return as an integer the *floor* of the maximum average speed per hour obtained on the sections of x. If x length is less than or equal to 1 return 0 since the car didn't move.

function gps(s, x) {
    if (x.length <= 1) return 0
    let max = 0
    for (let i = 0; i < x.length - 1; i++) {
        max = Math.max(max, (x[i + 1] - x[i]) * 3600 / s)
    }
    return Math.floor(max)
}