// https://www.codewars.com/kata/5b5097324a317afc740000fe

// Implement a function which finds the numbers less than 2, and the indices of numbers greater than 1 in the given sequence, and returns them as a pair of sequences.

// Return a nested array or a tuple depending on the language:

//     The first sequence being only the 1s and 0s from the original sequence.
//     The second sequence being the indexes of the elements greater than 1 in the original sequence.

function binaryCleaner(a) {
    let r = [[], []];
    a.map((x, i) => x < 2 ? r[0].push(x) : r[1].push(i));
    return r;
}