// https://www.codewars.com/kata/5a262cfb8f27f217f700000b

// In this Kata, you will be given two strings a and b and your task will be to return the characters that are not common in the two strings.

// For example:

// solve("xyab","xzca") = "ybzc" 
// --The first string has 'yb' which is not in the second string. 
// --The second string has 'zc' which is not in the first string. 

// Notice also that you return the characters from the first string concatenated with those from the second string.

class Solution{
  public static String solve(String a, String b){
    var result = "";
    for (var x : a.split("")){
      if (a.contains(x) && !b.contains(x)){
        result += x;
      }
    }
    for (var x : b.split("")){
      if (b.contains(x) && !a.contains(x)){
        result += x;
      }
    }
    return result;
  }
}