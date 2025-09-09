// https://www.codewars.com/kata/5a662a02e626c54e87000123

// Extra perfect number is the number that first and last bits are set bits.

// Given a positive integer N , Return the extra perfect numbers in range from 1 to N .

public class Solution {
    public static int[] extraPerfect(int number) {
        int [] arr;
        if(number%2==0) {
            arr = new int[number/2];
        } else{
            arr = new int[(number/2)+1];
        }
        for(int i =1,j=0; j<arr.length;i+=2,j++) {
            arr[j]=i;
        }
            return arr;
    }
}