// https://www.codewars.com/kata/5663f5305102699bad000056

// You are given two arrays a1 and a2 of strings. Each string is composed with letters from a to z. Let x be any string in the first array and y be any string in the second array.

// Find max(abs(length(x) − length(y)))

// If a1 and/or a2 are empty return -1 in each language except in Haskell (F#) where you will return Nothing (None).

function mxdiflg(a1, a2) {
    const minmax = (minmax, x) => [Math.min(minmax[0], x.length), Math.max(minmax[1], x.length)];
    if (a1.length == 0 || a2.length == 0) return -1;
    let minmax1 = a1.reduce(minmax, [Infinity, -1]);
    let minmax2 = a2.reduce(minmax, [Infinity, -1]);
    return Math.max(minmax1[1] - minmax2[0], minmax2[1] - minmax1[0]);
}