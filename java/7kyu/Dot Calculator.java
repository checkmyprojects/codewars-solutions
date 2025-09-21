// https://www.codewars.com/kata/6071ef9cbe6ec400228d9531

// You'll have to return a string that contains dots, as many the equation returns. If the result is 0, return the empty string. When it comes to subtraction, the first number will always be greater than or equal to the second number.

class Solution {
  public static String calc(String txt){
    
    String[] array = txt.split(" ");
    
    int a = array[0].length();
    int b = array[2].length();
    int total = 0;
    
    if(txt.contains("+")) total += a + b;
    if(txt.contains("-")) total += a - b;
    if(txt.contains("*")) total += a * b;
    if(txt.contains("//")) total += (int)Math.floor(a / b);
    
    String result = "";
    
    while(total > 0){
      result += ".";
      total--;
    } 
    
    return result;
  }
}