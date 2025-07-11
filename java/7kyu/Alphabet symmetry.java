// https://www.codewars.com/kata/59d9ff9f7905dfeed50000b0

// Given an array of words, return an array of the number of letters that occupy their positions in the alphabet for each word. For example,

public class Solution{
    public static int[] solve(String[] arr){
        int[] numbers = new int[arr.length];
        
        for (int i = 0; i < arr.length; i++) {
            String aux = arr[i].toLowerCase();
            int cont = 0;
            for (int j = 0; j < aux.length(); j++) {
                if ((aux.charAt(j) - 97) == j) {
                    cont++;
                }
            }
            numbers[i] = cont;
        }
        return numbers;
    }
}