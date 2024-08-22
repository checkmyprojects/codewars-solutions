// https://www.codewars.com/kata/54fb853b2c8785dd5e000957

// Write a generic function chainer that takes a starting value, and an array of functions to execute on it (array of symbols for Ruby).

// The input for each function is the output of the previous function (except the first function, which takes the starting value as its input). Return the final value after execution is complete.

function chain(v, fns) {
    return fns.reduce(function(v, fn) { return fn(v) }, v);
}