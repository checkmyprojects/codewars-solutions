// https://www.codewars.com/kata/699af631058f5c12b04f4efe

// Implement the function stalin_sort / stalinSort, which accepts an array of integers and modifies it in-place, removing all elements that violate the ascending order relative to the previous surviving element.

// All other elements are considered enemies of order and must be eliminated.

import java.util.List;

public class Solution{
  public static void stalinSort(List<Integer> arr){
    int partitionLength= 0; 
    int localMax = Integer.MIN_VALUE;
    for(int val: arr){                 
      if(localMax <= val){             
        arr.set(partitionLength++, val);
        localMax= val;           
      }
      else {
        System.out.println("Расстрелять!");
      }
    }                                  
    arr.subList(partitionLength, arr.size()).clear();
  }
}