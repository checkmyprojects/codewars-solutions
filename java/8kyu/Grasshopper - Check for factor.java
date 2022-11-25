// This function should test if the factor is a factor of base.

// Return true if it is a factor or false if it is not.

// https://www.codewars.com/kata/55cbc3586671f6aa070000fb

public class Kata {
    public static boolean checkForFactor(int base, int factor) {
        if(base%factor == 0){
          return true;
        }
      return false;
    }
}