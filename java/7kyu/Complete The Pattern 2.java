// https://www.codewars.com/kata/55733d3ef7c43f8b0700007c

// You have to write a function pattern which returns the following Pattern (See Pattern & Examples) upto n number of rows.

public class CompleteThePattern {
    public static String pattern ( int n) {
         if (n < 1) {
           return "";
         }
         
         StringBuilder sb = new StringBuilder();
         for (int i = 1; i <= n; i++) {
           for (int j = n; j >= i; j--) {
             sb.append(j);
           }
           if (i < n)
             sb.append('\n');
         }
         return sb.toString();
    }
}