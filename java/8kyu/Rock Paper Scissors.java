// Rock Paper Scissors

// Let's play! You have to return which player won! In case of a draw return Draw!.

// Examples(Input1, Input2 --> Output):

// "scissors", "paper" --> "Player 1 won!"
// "scissors", "rock" --> "Player 2 won!"
// "paper", "paper" --> "Draw!"

// https://www.codewars.com/kata/5672a98bdbdd995fad00000f

public class Kata {
  public static String rps(String p1, String p2) {
    if(p1.equals(p2)){
      return "Draw!";
    }else if(p1.equals("scissors")){
      if(p2.equals("paper")){
        return "Player 1 won!";
      }else if(p2.equals("rock")){
        return "Player 2 won!";
      }
    }else if(p1.equals("paper")){
      if(p2.equals("scissors")){
        return "Player 2 won!";
      }else if(p2.equals("rock")){
        return "Player 1 won!";
      }
    }else if(p1.equals("rock")){
      if(p2.equals("scissors")){
        return "Player 1 won!";
      }else if(p2.equals("paper")){
        return "Player 2 won!";
      }
    }
    return "ERROR";
  }
}
