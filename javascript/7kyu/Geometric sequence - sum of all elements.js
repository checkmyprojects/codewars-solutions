// https://www.codewars.com/kata/55cb000321ca31039e00007d

// Write a function geometric_sequence_sum(a, r, n), which will help you compute a geometric progression/series.

// The parameters provided are as follows:

//     a is the first term
//     r is the common ratio
//     n is the amount of terms

function GeometricSequenceSum(firstVal, ratio, length) {
    let prev = firstVal;
    let sum = firstVal;
    
    for (let i = 2; i <= length; i++) {
      const next = prev * ratio;
        sum += next;
        prev = next;
    }
    
    return sum;
}