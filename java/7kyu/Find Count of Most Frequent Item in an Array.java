// https://www.codewars.com/kata/56582133c932d8239900002e

// Complete the function to find the count of the most frequent item of an array. You can assume that input is an array of integers. For an empty array return 0

public class Kata {
   public static int mostFrequentItemCount(int[] collection) {
    int most = 0;
    for (int i = 0; i<collection.length; i++){
    int count = 0;
      for(int x : collection){
      if (x==collection[i]){
      count++;
      }  
    } if (count>most){
    most=count;
    }
    } 
    return most;
  }
}