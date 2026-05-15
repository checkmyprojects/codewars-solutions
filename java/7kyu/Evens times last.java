// https://www.codewars.com/kata/5a1a9e5032b8b98477000004

// Given a sequence of integers, return the sum of all the integers that have an even index (odd index in COBOL), multiplied by the integer at the last index.
// Indices in sequence start from 0.
// If the sequence is empty, you should return 0.

public class Kata{
    public static int evenLast(int[] numbers){
        if  (numbers.length == 0) { return 0; }
        
        int result = 0;
        for (int i = 0; i < numbers.length; i += 2) {
        result += numbers[i];
        }
        return result * numbers[numbers.length - 1];
    }
}