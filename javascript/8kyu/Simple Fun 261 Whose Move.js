// https://www.codewars.com/kata/59126992f9f87fd31600009b

function whoseMove(lastPlayer, win) {
    if (lastPlayer === 'black' && win === true) {
      return 'black';
    } else if (lastPlayer === 'black' && win === false) {
      return 'white';
    } else if (lastPlayer === 'white' && win === true) {
      return 'white';
    } else {
      return 'black';
    }
  }