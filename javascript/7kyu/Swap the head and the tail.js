// https://www.codewars.com/kata/5a34f087c5e28462d9000082

// You need to swap the head and the tail of the specified array:

// the head (the first half) of array moves to the end, the tail (the second half) moves to the start.
// The middle element, if it exists, stays in the same position.

// Return a new array. Do not modify the input.

// For example:

// [ 1, 2, 3, 4, 5 ]   =>  [ 4, 5, 3, 1, 2 ]
//  \----/   \----/         
//   head     tail 

// [ -1, 2 ]  => [ 2, -1 ] 
// [ 1, 2, -3, 4, 5, 6, -7, 8 ]   =>  [ 5, 6, -7, 8, 1, 2, -3, 4 ]  

function swapHeadAndTail(arr) {
    let a = Math.floor(arr.length / 2);
    let b = Math.round(arr.length / 2);
    let a1 = arr.slice(0, a);
    let b1 = arr.slice(b);
    let c = arr.slice(a, b)
    return arr.length % 2 ? b1.concat(c,a1) : b1.concat(a1)
}