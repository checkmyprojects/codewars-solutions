// https://www.codewars.com/kata/558fa34727c2d274c10000ae

// Write a program that, given a word, computes the scrabble score for that word.

public class Kata{
    public static int scrabbleScore(String word) {
      int score = 0;
      char[] arr = word.toUpperCase().toCharArray();
      for (int i = 0; i < arr.length; i++) {
        switch(arr[i]){
            case 'A':
            case 'E':
            case 'I':
            case 'O':
            case 'U':
            case 'L':
            case 'N':
            case 'R':
            case 'S':
            case 'T':
              score+=1;
              break;
            case 'D':
            case 'G':
              score+=2;
              break;
            case 'B':
            case 'C':
            case 'M':
            case 'P':
              score+=3;
              break;
            case 'F':
            case 'H':
            case 'V':
            case 'W':
            case 'Y':
              score+=4;
              break;
            case 'K':
              score+=5;
              break;
            case 'J':
            case 'X':
              score+=8;
              break;
            case 'Q':
            case 'Z':
              score+=10;
              break;
            default:
              score+=0;
        }
      }
      return score;
    }
}