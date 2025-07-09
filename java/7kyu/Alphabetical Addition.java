// https://www.codewars.com/kata/5d50e3914861a500121e1958

// Your task is to add up letters to one letter.
// The function will be given an array of single character Strings, each one being a letter to add.

public class Kata {

    public static String addLetters(String... letters) {

        if(letters.length == 0){
          return "z";
        }
        int sum = 0;

        for(int i = 0;i < letters.length; i++){
           sum += letters[i].charAt(0)%96;
        }
        if(sum > 26) sum = sum%26;
        if(sum < 1) sum = 26;
        return String.valueOf((char) (sum+96));
    }
}