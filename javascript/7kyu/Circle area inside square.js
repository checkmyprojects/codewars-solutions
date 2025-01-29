// https://www.codewars.com/kata/5899aa695401a83a5c0000c4

// Your function gets a number which represents the area of the square and should return the area of the circle. The tests are rounded by 8 decimals to make sure multiple types of solutions work.

// You don't have to worry about error handling or negative number input: area >= 0.

function squareAreaToCircle(size){
    return size * Math.PI / 4;
}