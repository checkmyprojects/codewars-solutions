// https://www.codewars.com/kata/56fc55cd1f5a93d68a001d4e

public class Kata
{
    public static long stairsIn20(int[][] stairs)
    {
      long oneYear = 0;
       for (int r = 0; r < stairs.length; r++) {
         for (int c = 0; c < stairs[r].length; c++) {
           oneYear += stairs[r][c];
         }
      }
       return oneYear * 20;
    }
}