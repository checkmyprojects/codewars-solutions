// https://www.codewars.com/kata/5a58d889880385c2f40000aa

// Given a number determine if it Automorphic or not .

function automorphic(n){
    let len = n.toString().length
    let num = (n * n).toString().slice(-len)
    return (n == num) ? 'Automorphic' : 'Not!!'
  }