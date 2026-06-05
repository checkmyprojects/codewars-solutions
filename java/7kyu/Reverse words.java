// Complete the function that accepts a string parameter, and reverses each word in the string. All spaces in the string should be retained.
// Examples

// "This is an example!" ==> "sihT si na !elpmaxe"
// "double  spaces"      ==> "elbuod  secaps"

// https://www.codewars.com/kata/5259b20d6021e9e14c0010d4

public class Kata {
  public static String reverseWords(final String original){
    String answer = "";
    String placeholder = "";
    for(int i = original.length() - 1; i >= 0; i-- ){
      if(original.charAt(i) != ' '){
        placeholder = placeholder + original.charAt(i);
      }
      else{
        answer = " " + placeholder + answer;
        placeholder = "";
      }
    }
    answer = placeholder + answer;
    return answer;      
  }
}