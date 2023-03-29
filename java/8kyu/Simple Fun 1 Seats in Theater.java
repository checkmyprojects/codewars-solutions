// https://www.codewars.com/kata/588417e576933b0ec9000045

public class Kata {
  public static int seatsInTheater(int nCols, int nRows, int col, int row) {
    return (nCols - --col) * (nRows - row);
  }
}