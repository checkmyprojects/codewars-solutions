// Triple Trouble

// Create a function that will return a string that combines all of the letters of the three inputed strings in groups. Taking the first letter of all of the inputs and grouping them next to each other. Do this for every letter, see example below!

// E.g. Input: "aa", "bb" , "cc" => Output: "abcabc" 

// https://www.codewars.com/kata/5704aea738428f4d30000914

public class Kata {
  public static String tripleTrouble(String one, String two, String three) {
    String s = "";
    for (int i = 0; i < one.length(); i++){
      s += "" + one.charAt(i) + two.charAt(i) + three.charAt(i);
    }
    return s;
  }
}