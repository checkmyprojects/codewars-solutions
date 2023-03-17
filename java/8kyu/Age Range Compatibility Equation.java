// https://www.codewars.com/kata/5803956ddb07c5c74200144e

public class Kata{
  public static String datingRange(int age) {
    double min, max;
    
    if (age < 15) {
      min = age - 0.1 * age;
      max = age + 0.1 * age;
    }
    else {
      min = (age / 2) + 7;
      max = (age - 7) * 2;
    }
    
    return (int)min + "-" + (int)max;
  }
}