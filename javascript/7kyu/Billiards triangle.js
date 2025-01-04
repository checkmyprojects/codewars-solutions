// https://www.codewars.com/kata/5bb3e299484fcd5dbb002912

// Write a function that takes number of balls (≥ 1) and calculates how many levels you can build a triangle.

function pyramid(balls) {
    let count = 0;
    let ballsPerRow = 0;
    
    for(let x=0; x<balls; x++) {
      count++;
      ballsPerRow = ballsPerRow + count;
      if(ballsPerRow == balls) {
        return count;
      }
      if(balls < ballsPerRow) {
        return count - 1;
      }
    }
  }