// https://www.codewars.com/kata/5a1c28f9c9fc0ef2e900013b

// The task is very simple: you must return pyramids. Given a number n, you build a pyramid with n floors

// For example , given a n=4 you must to print this pyramid:

//    /\
//   /  \
//  /    \
// /______\ 

// Other example, given a n=6 you must to print this pyramid:

//      /\
//     /  \
//    /    \
//   /      \
//  /        \
// /__________\

// Another example, given a n=10, you must to print this pyramid:

//          /\
//         /  \
//        /    \
//       /      \
//      /        \
//     /          \
//    /            \
//   /              \
//  /                \
// /__________________\

// Note: a line feed character is needed at the end of the string.

function pyramid(n){
    var r = '';
    for(var i = 0; i<n; i++){
      r += ' '.repeat(n-i-1);
      r += '/';
      r += (i<n-1)?' '.repeat(2*i):'_'.repeat(2*i);
      r += '\\';
      r += '\n';
    }
    return r;
}