// https://www.codewars.com/kata/59f7a0a77eb74bf96b00006a

// Complete the function which accepts two strings and calculates the golf score of a game. Both strings will be of length 18, and each character in the string will be a number between 1 and 9 inclusive. 

public class Kata {

  public static int golfScoreCalculator(String parList, String scoreList) {
    char[] chars = parList.toCharArray();
    char[] scores = scoreList.toCharArray();
    
    int score = 0;
    
    for(int i = 0; i < chars.length; i++){
     score += scores[i] - chars[i]; 
    }
    return score;
  }
}