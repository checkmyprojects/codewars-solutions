// https://www.codewars.com/kata/5862f663b4e9d6f12b00003b

public class BlueAndRedMarbles {
  public static double guessBlue(int blueStart, int redStart, int bluePulled, int redPulled) {
    int blueBalls = blueStart - bluePulled;
    int redBalls = redStart - redPulled;
    return (double)blueBalls/(redBalls + blueBalls);
  }
}