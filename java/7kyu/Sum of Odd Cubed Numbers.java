// https://www.codewars.com/kata/580dda86c40fa6c45f00028a

// Find the sum of the odd numbers within an array, after cubing the initial integers. The function should return undefined if any of the values aren't numbers.

public class FindOddCubes {
    public static int cubeOdd(int arr[]) {
        int result = 0;
        for(int i : arr) {
            if(i % 2 != 0)  result += Math.pow(i, 3);   
        }
        return result;
    }
}