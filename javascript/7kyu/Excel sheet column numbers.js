// https://www.codewars.com/kata/55ee3ebff71e82a30000006a

// Write a function that, given a column title as it appears in an Excel sheet, returns its corresponding column number.

// All column titles will be uppercase.

// Examples:

// Column title: "A" --> return 1
// Column title: "Z" --> return 26
// Column title: "AA" --> return 27

function titleToNumber(title) {
    return title.split("").map(x=> x.charCodeAt(0)-64).reduce((x,y)=> x*26+y)
  }