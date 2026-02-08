// https://www.codewars.com/kata/57d29ccda56edb4187000052

// Given two values from the above game, return the Player result as "Player 1 Won!", "Player 2 Won!", or "Draw!".

public class Kata {
    public static String rpsls(String player1, String player2) {
        List<String> arr = List.of("scissors", "paper", "rock", "lizard", "spock");
            int i1 = arr.indexOf(player1);
            int i2 = arr.indexOf(player2);
            if(i1 < i2) return (i2 - i1) % 2 != 0 ? "Player 1 Won!" : "Player 2 Won!";
            if(i1 > i2) return (i1 - i2) % 2 != 0 ? "Player 2 Won!" : "Player 1 Won!";
            return "Draw!";  
    }
}