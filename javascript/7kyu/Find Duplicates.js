// https://www.codewars.com/kata/5558cc216a7a231ac9000022

// Given an array, find the duplicates in that array, and return a new array of those duplicates. The elements of the returned array should appear in the order when they first appeared as duplicates.

const  duplicates = arr => {
    let map = new Map();
    let set = new Set();
    arr.forEach(e => {
      map.get(e) ? set.add(e) : map.set(e, true)
    })
    return Array.from(set)
  }