// https://www.codewars.com/kata/5a25ac6ac5e284cfbe000111

// You will be given the first row of the triangle as a string and its your job to return the final colour which would appear in the bottom row as a string. In the case of the example above, you would the given RRGBRGBB you should return G.

//     The input string will only contain the uppercase letters R, G, B and there will be at least one letter so you do not have to test for invalid input.
//     If you are only given one colour as the input, return that colour.

function triangle(row) {
    while (row.length > 1) {
      let newRow = ''
      
      for (let i = 0; i < row.length - 1; i += 1) {
        const lColor = row[i]
        const rColor = row[i + 1]
        
        newRow += getLastColor(lColor, rColor)  
      }
      
      row = newRow
    }
    
    return row
  }
  
  function getLastColor(firstColor, secondColor) {
    if (firstColor === secondColor) {
      return firstColor
    }
    
    return 'RGB'.replace(firstColor, '').replace(secondColor, '')
  }