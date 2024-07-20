// https://www.codewars.com/kata/5ae7e3f068e6445bc8000046

// You're saying good-bye your best friend , See you next happy year .

// Happy Year is the year with only distinct digits , (e.g) 2018
// Task

// Given a year, Find The next happy year or The closest year You'll see your best friend

function nextHappyYear(year){
    let newYear = year + 1
    let arr = newYear.toString().split('') 
    if(arr.join('') === Array.from(new Set(arr)).join('')) return newYear
    else return nextHappyYear(newYear)
  }