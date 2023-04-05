// https://www.codewars.com/kata/57bfea4cb19505912900012c

package cw;

public class Reflections{
  
  public static int[] reflectPoint(int[] p, int[] q){
    int[] b = {0,0};
        b[0] = q[0] * 2 - p[0];
        b[1] = q[1] * 2 - p[1];

        return b;
  }
  
}