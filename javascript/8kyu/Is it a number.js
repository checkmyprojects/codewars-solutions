// https://www.codewars.com/kata/57126304cdbf63c6770012bd

function isDigit(s) {
    return !isNaN(parseFloat(s)) && !isNaN(s - 0)
  }