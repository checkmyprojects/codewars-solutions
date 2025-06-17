// https://www.codewars.com/kata/56242b89689c35449b000059

// A grid is a perfect starting point for many games (Chess, battleships, Candy Crush!).

// Making a digital chessboard I think is an interesting way of visualising how loops can work together.

// Your task is to write a function that takes two integers rows and columns and returns a chessboard pattern as a two dimensional array.

function chessBoard(rows, columns) {
    var arr=[];
    for (var i=0; i<rows; ++i)
    {
      var ar=[];
      for (var j=0; j<columns; ++j)
        if ((i+j)%2==0)
          ar.push('O');
        else
          ar.push('X');
      arr.push(ar);
    }
    return arr;
  }