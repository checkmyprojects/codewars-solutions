// https://www.codewars.com/kata/589519d1f0902e01af000054

// The first three stages of a sequence are shown.
// The blocksize is a by a and a ≥ 1.
// What is the perimeter of the nth shape in the sequence (n ≥ 1) ?

function perimeterSequence(a,n) {
    if ((a > 0) & (n > 0)) { 
        return ((a * 4) * n);
    }
}