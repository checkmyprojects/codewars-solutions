// https://www.codewars.com/kata/588f5a38ec641b411200005b

// Write a function that receives two strings as parameter. This strings are in the following format of date: YYYY/MM/DD. Your job is: Take the years and calculate the difference between them.

public class Bud {
    public static int howManyYears(String date1, String date2){
      int year1 = Integer.parseInt(date1.substring(0,4));
      int year2 = Integer.parseInt(date2.substring(0,4));
      return ((year1-year2)>=0) ? year1-year2 : year2-year1;
    }
}