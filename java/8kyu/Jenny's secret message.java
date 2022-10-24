// Jenny has written a function that returns a greeting for a user. However, she's in love with Johnny, and would like to greet him slightly different. She added a special case to her function, but she made a mistake.

// https://www.codewars.com/kata/55225023e1be1ec8bc000390

public class Greeter {
  public static String greet(String name) {
    if(name.equals("Johnny")){
      return "Hello, my love!";
    }
    
    return "Hello, " + name + "!";   
  }
}