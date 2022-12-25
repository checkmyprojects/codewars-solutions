// Your goal is to return multiplication table for number that is always an integer from 1 to 10.

// https://www.codewars.com/kata/5a2fd38b55519ed98f0000ce

class Kata {
    public static String multiTable(int num) {
        String result = "";
      for(int i = 1; i <= 10;i++){
        result += i + " * " + num + " = " + i*num;
        if(i<10){
          result += "\n";
        }
      }
      return result;
    }
}