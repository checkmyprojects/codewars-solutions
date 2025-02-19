// https://www.codewars.com/kata/53da6a7e112bd15cbc000012

// Python dictionaries are inherently unsorted. So what do you do if you need to sort the contents of a dictionary?
// Create a function that returns a sorted list of (key, value) tuples (Javascript: arrays of 2 items).
// The list must be sorted by the value and be sorted largest to smallest.

function sortDict(dict) {
    return Object.keys(dict)
        .map(function(v){ return [+v || v, dict[v]] })
        .sort(function(a, b){ return a[1] < b[1] });
}