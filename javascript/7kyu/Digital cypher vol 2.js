// https://www.codewars.com/kata/592edfda5be407b9640000b2

// Write a function that accepts an array of integers code and a key number. As the result, it should return string containg a decoded message from the code.
// Input / Output

// The code is a array of positive integers.
// The key input is a nonnegative integer.

function decode  (c, n) {
    let e = '0abcdefghijklmnopqrstuvwxyz'.split('');
    let a = Math.ceil(c.length / (''+n).length);
    let b = Array(a).fill().map((e, i) => n).join('').split('').slice(0, c.length);
    let d = [];
    let s = [];
    for(let i = 0; i < c.length; i++){
        d.push(c[i] - b[i]);
        s.push(e[d[i]]);
    }
    return s.join('')
}