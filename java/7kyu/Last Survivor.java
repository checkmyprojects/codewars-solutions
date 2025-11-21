// https://www.codewars.com/kata/609eee71109f860006c377d1

// You are given a string of letters and an array of numbers.
// The numbers indicate positions of letters that must be removed, in order, starting from the beginning of the array.
// After each removal the size of the string decreases (there is no empty space).
// Return the only letter left

public class Kata {
    public static String lastSurvivor(String letters, int[] coords) {
        StringBuilder sb = new StringBuilder(letters);
        for (int i : coords) {
          sb.deleteCharAt(i);
        }
        return sb.toString();
    }
}