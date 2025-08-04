// https://www.codewars.com/kata/5a1ee4dfffe75f0fcb000145

// For this game of BINGO, you will receive a single array of 10 numbers from 1 to 26 as an input. Duplicate numbers within the array are possible.

// Each number corresponds to their alphabetical order letter (e.g. 1 = A. 2 = B, etc). Write a function where you will win the game if your numbers can spell "BINGO". They do not need to be in the right order in the input array. Otherwise you will lose. Your outputs should be "WIN" or "LOSE" respectively.

package com.codewars.julesnuggy;
import java.util.HashMap;

public class BingoOrNot {
    public static String bingo(int[] numberArray){
        HashMap<Character, Boolean> bingo = new HashMap<>();
        bingo.put('b', false);
        bingo.put('i', false);
        bingo.put('n', false);
        bingo.put('g', false);
        bingo.put('o', false);
        
        for (int i : numberArray) 
            if (bingo.containsKey((char)(i-1+'a'))) 
                bingo.put((char)(i-1+'a'), true);
        
        return bingo.containsValue(false) ? "LOSE" : "WIN";
    }
}