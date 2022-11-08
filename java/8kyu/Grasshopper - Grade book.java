Grade book

// Complete the function so that it finds the average of the three scores passed to it and returns the letter value associated with that grade.
// Numerical Score 	Letter Grade
// 90 <= score <= 100 	'A'
// 80 <= score < 90 	'B'
// 70 <= score < 80 	'C'
// 60 <= score < 70 	'D'
// 0 <= score < 60 	'F'

// Tested values are all between 0 and 100. Theres is no need to check for negative values or values greater than 100.

// https://www.codewars.com/kata/55cbd4ba903825f7970000f5

public class GrassHopper {

    public static char getGrade(int s1, int s2, int s3) {

      int avg = (s1+s2+s3) / 3;
      if(avg >= 90){
        return 'A';
      }else if(avg >= 80){
        return 'B';
      }else if(avg >= 70){
        return 'C';
      }else if(avg >= 60){
        return 'D';
      }else{
        return 'F';
      }
    }
}