// https://www.codewars.com/kata/606b43f4adea6e00425dff42

// Write a function which maps a function over the lists in a list:

// function gridMap(fn,xss) { return [[]]; }

// Example 1:

// const xss = [ [1,2,3]
//             , [4,5,6]
//             ];

// gridMap( x => x+1 , xss )  =>  [[2,3,4],[5,6,7]]
// gridMap( x => x**2 , xss )  =>  [[1,4,9],[16,25,36]]

// Example 2

// const xss = [['h','E','l','l','O'],['w','O','r','L','d']];

// gridMap( x => x.toUpperCase() , xss )  =>  [['H','E','L','L','O'],['W','O','R','L','D']]

import java.util.*;
import java.util.function.*;

public class Solution{
  
    public static <T,R> R[][] gridMap(Function<T,R> fn, T[][] list){
      return Arrays.stream(list)
        .map(x -> Arrays.stream(x)
             .map(fn)
             .toArray(s -> (R[]) new Object[s]))
        .toArray(s -> (R[][]) new Object[s][]);
    }
}