// https://www.codewars.com/kata/59377c53e66267c8f6000027

// Write a function that accepts fight string consists of only small letters and return who wins the fight. When the left side wins return Left side wins!, when the right side wins return Right side wins!, in other case return Let's fight again!.

public class Kata{
    public static String alphabetWar(String fight){
      int right = 0, left = 0;
      for (char c : fight.toCharArray()) {
        switch (c) {
          case 'w' : left += 4; break;
          case 'p' : left += 3; break;
          case 'b' : left += 2; break;
          case 's' : left += 1; break;
          
          case 'm' : right += 4; break;
          case 'q' : right += 3; break;
          case 'd' : right += 2; break;
          case 'z' : right += 1; break;
        }
      }
      if (left == right) return "Let's fight again!";
      return (left > right ? "Left" : "Right") + " side wins!";
    }
 }