// https://www.codewars.com/kata/69269262ced9e95dc63abd1e

// Situation

// One day Alice was at the casino on her favorite slot machine ("The Jumbler") when she noticed a set of numbers occasionally flashing in one corner of the screen. She found that by treating them as indices, reordering them according to a pattern, and counting the reorderings, she could know how many spins to make before the machine would finally hit a big jackpot payout!

// Reordering

// The pattern Alice discovers goes as follows:

//     select the value at index zero
//     (if the value is 0 do not continue)
//     elsewise, the value is our search index
//     go to new value found at the search index
//     remove this new value from its place in order
//     reposition this new value onto the front of the list
//     (if the new value is zero, the reorderings will cease)
//     elsewise, repeat all instructions with this new ordering

// Task

// Write a function to help Alice find out the count
// of times the given integers have to be reordered
// and thus know how many Jumbler spins to make
// before betting large and getting a huge payout!!

// Input

// A(n) array / list / tuple / vector of unsigned integers.

//     values represent the indices of the collection itself
//     thus the values are all distinct from one another
//     and all indices guaranteed to be present
//     the values will be randomly shuffled

// Output

// An unsigned integer     
//         of the count of times the given numbers must be reordered
//                 according to Alice's Reordering Pattern
//                         before the value at index zero actually becomes 0 itself. 

function jumbler(arr) {
    let counter = 0;
    
    while (arr[0] !== 0) {

        let searchIndex = arr[0];
        let value = arr[searchIndex];
        arr.splice(searchIndex, 1);
        arr.unshift(value);
        counter++;
    }
    return counter;
}