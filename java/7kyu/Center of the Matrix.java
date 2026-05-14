// https://www.codewars.com/kata/54c91b5228ec4c3b5900036e

// Write a function that returns the center of a 2-dim array.

// It should return nil / None / null / Nothing (etc., use your language's equivalent for an empty value) if there is no single center element.

// You can assume all inputs will be rectangular matrices in array form. ex: [[1, 2, 3], [4, 5, 6], [7, 8, 9]]

public class Kata {
  public static Integer center(int[][] matrix) {
    if (matrix.length == 0) return null;
    int colms = matrix.length; 
    int rows = matrix[0].length; 
    
    if ((colms*rows) % 2 == 0) return null; 
    else { 
      int midColm = colms / 2; 
      int midRow = rows / 2; 
      return matrix[midColm][midRow];
    }
  }
}