// Complete the method that takes a boolean value and return a "Yes" string for true, or a "No" string for false.

// https://www.codewars.com/kata/53369039d7ab3ac506000467

class YesOrNo{
  public static String boolToWord(boolean b){
    if(b == true){
      return "Yes";
    }else{
      return "No";
    }
  }
}