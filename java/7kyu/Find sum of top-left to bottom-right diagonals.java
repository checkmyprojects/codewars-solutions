// https://www.codewars.com/kata/5497a3c181dd7291ce000700

// Given a square matrix (i.e. an array of subarrays), find the sum of values from the first value of the first array, the second value of the second array, the third value of the third array, and so on...

public class Diagonal {
    public static int diagonalSum(final int[][] matrix) {
        int total = 0;
        for (int x = 0; x < matrix.length; x++) {
            total += matrix[x][x];
        }
        return total;
    }
}