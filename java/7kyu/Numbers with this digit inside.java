// https://www.codewars.com/kata/57ad85bb7cb1f3ae7c000039

// You have to search all numbers from inclusive 1 to inclusive a given number x, that have the given digit d in it.
// The value of d will always be 0 - 9.
// The value of x will always be greater than 0.

// You have to return as an array

// If there are no numbers, which include the digit, return [0,0,0].

public class Kata
{
  public static long[] NumbersWithDigitInside(long x, long d)
  {   long count = 0 ; 
      long sum = 0 ;  long mod = 0 ; 
      for (int i = 1; i <=x ; i ++) {  
         if (Long.toString(i).contains("" + d))  { 
           if (mod == 0) mod++; 
            count++; sum= sum + i ; mod = mod * i ; 
         }
      }
            return new long[] {count , sum, mod} ; 
      }
  }