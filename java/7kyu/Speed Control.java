// https://www.codewars.com/kata/56484848ba95170a8000004d

// Given s and x the task is to return as an integer the *floor* of the maximum average speed per hour obtained on the sections of x. If x length is less than or equal to 1 return 0 since the car didn't move.

public class GpsSpeed {
    
    public static int gps(int s, double[] x) {
       double maxDiff = 0.0;
        for(int i = 0; i < x.length -1; i++){
          maxDiff = Math.max(x[i+1] - x[i], maxDiff);
        }
          return (int)Math.floor(maxDiff*3600.0/s);
    }
}