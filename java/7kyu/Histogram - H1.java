// https://www.codewars.com/kata/57d532d2164a67cded0001c7

// You will be passed the dice value frequencies, and your task is to write the code to return a string representing a histogram, so that when it is printed it has the same format as the example.

public class Dinglemouse {

  public static String histogram(final int results[]) {
  	String result = "";
  	for (int i = results.length - 1; i >= 0; i--){
    	result += i+1 + "|";
      if (results[i] == 0) result += "\n";
      else {
        for (int x = results[i]; x > 0; x--) {
          result += "#";
        }
        result += " " + results[i] + "\n";
      }
    }
    return result;
  }
  
}