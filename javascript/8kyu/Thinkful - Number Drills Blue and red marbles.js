// https://www.codewars.com/kata/5862f663b4e9d6f12b00003b

function guessBlue(blueStart, redStart, bluePulled, redPulled) {
    let blueBalls = blueStart - bluePulled;
    let redBalls = redStart - redPulled;
    return blueBalls/(redBalls + blueBalls);
  }