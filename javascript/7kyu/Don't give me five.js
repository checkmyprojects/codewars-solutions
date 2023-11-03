// https://www.codewars.com/kata/5813d19765d81c592200001a

// In this kata you get the start number and the end number of a region and should return the count of all numbers except numbers with a 5 in it. The start and the end number are both inclusive!

function dontGiveMeFive(start, end) {
    let count = 0
    for (let i = start; i <= end; i++) {
      if (!/5/.test(i)) {
        count++
      }
    }
    return count
  }