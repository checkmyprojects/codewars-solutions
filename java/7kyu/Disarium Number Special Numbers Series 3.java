// https://www.codewars.com/kata/5a53a17bfd56cb9c14000003

// Definition
// Disarium number is the number that The sum of its digits powered with their respective positions is equal to the number itself.
// Task
// Given a number, Find if it is Disarium or not .

public class Solution {
    public static String disariumNumber(int number) {
        int sum = 0;
        char[] arr = String.valueOf(number).toCharArray();
        
        for (int i = 0; i < arr.length; i++)  
          sum += Math.pow(arr[i]-'0', i+1);
        
        return sum == number ? "Disarium !!" : "Not !!"; 
    }
}