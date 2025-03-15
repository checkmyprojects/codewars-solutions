// https://www.codewars.com/kata/6512b3775bf8500baea77663

// Given a string indicating a range of letters, return a string which includes all the letters in that range, including the last letter.
// Note that if the range is given in capital letters, return the string in capitals also!

function gimmeTheLetters(sp) {
    const [start, end] = sp.split('-')
    const startCode = start.charCodeAt(0);
    const endCode = end.charCodeAt(0)
      let result = '';
      for (let i = startCode; i <= endCode; i++) {
          result += String.fromCharCode(i);
      }
  
      return result;
}