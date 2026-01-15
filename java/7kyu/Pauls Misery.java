// https://www.codewars.com/kata/57ee31c5e77282c24d000024

// Paul is an excellent coder and sits high on the CW leaderboard. He solves kata like a banshee but would also like to lead a normal life, with other activities. But he just can't stop solving all the kata!!

// Given an array (x) you need to calculate the Paul Misery Score. The values are worth the following points:

// kata = 5
// Petes kata = 10
// life = 0
// eating = 1

// The Misery Score is the total points gained from the array. Once you have the total, return as follows:

// < 40 = 'Super happy!'
// < 70 >= 40 = 'Happy!'
// < 100 >= 70 = 'Sad!'
// > 100 = 'Miserable!'

public class Kata {
    public static String paul(String[] x) {
        int i = 0;
        for(String s : x){
          i += s.equals("kata") ? 5 : s.equals("life") ? 0 : s.equals("eating") ? 1 : 10;  
        }
        return i > 100 ? "Miserable!" : i >= 70 ? "Sad!" : i >= 40 ? "Happy!" : "Super happy!";
    }
}