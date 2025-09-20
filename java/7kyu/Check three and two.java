// https://www.codewars.com/kata/5a9e86705ee396d6be000091

// Given an array with exactly 5 strings "a", "b" or "c" (chars in Java, characters in Fortran), check if the array contains three and two of the same values.

public class Solution {
    public boolean checkThreeAndTwo(char[] chars) {
      int a=0,b=0,c=0;
      for(int i=0;i<chars.length;i++){
      if(chars[i]=='a'){a++;}
      if(chars[i]=='b'){b++;}
      if(chars[i]=='c'){c++;}   
      }
      if((a==3||b==3||c==3)&&(a==2||b==2||c==2))
  return true;
  
  return false;
  }
}