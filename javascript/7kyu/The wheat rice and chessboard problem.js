// https://www.codewars.com/kata/5b0d67c1cb35dfa10b0022c7

// I assume most of you are familiar with the ancient legend of the rice (but I see wikipedia suggests wheat, for some reason) problem, but a quick recap for you: a young man asks as a compensation only 1 grain of rice for the first square, 2 grains for the second, 4 for the third, 8 for the fourth and so on, always doubling the previous.

// Your task is pretty straightforward (but not necessarily easy): given an amount of grains, you need to return up to which square of the chessboard one should count in order to get at least as many.

function squaresNeeded(grains){
    if(grains <= 2){ return grains;}
    if(grains > 2) {
      let i = 0;
        while(2**i <= grains){
          i++;
        }
      return i;
    }  
  }