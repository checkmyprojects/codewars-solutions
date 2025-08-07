// https://www.codewars.com/kata/595519279be6c575b5000016

// Description:

// Groups of characters decided to make a battle. Help them to figure out which group is more powerful. Create a function that will accept 2 strings and return the one who's stronger.
// Rules:

//     Each character have its own power: A = 1, B = 2, ... Y = 25, Z = 26
//     Strings will consist of uppercase letters only
//     Only two groups to a fight.
//     Group whose total power (A + B + C + ...) is bigger wins.
//     If the powers are equal, it's a tie.

// Examples:

//       * "ONE", "TWO"  -> "TWO"`
//       * "ONE", "NEO"  -> "Tie!"

public class BattleOfTheCharacters {
    public static String battle(final String x, final String y) {
        int powerA=0;
        int powerB=0;
        for(char a : x.toCharArray())
          powerA+=a-64;
        for(char b : y.toCharArray())
          powerB+=b-64;
        if(powerA==powerB)
          return "Tie!";
        if(powerA>powerB)
          return x;
        else
          return y;
    }
}