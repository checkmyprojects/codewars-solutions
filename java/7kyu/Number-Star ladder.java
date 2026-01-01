// https://www.codewars.com/kata/5631213916d70a0979000066

// Using n as a parameter in the function pattern, where n>0, complete the codes to get the pattern (take the help of examples):
// Note: There is no newline in the end (after the pattern ends)

public class Kata {
    public static String pattern(int n){
      StringBuilder str = new StringBuilder("1\n");
       for(int i=2; i<=n;i++)
         str.append("1"+"*".repeat(i-1)+i+"\n");
      return str.toString().trim();
    }
}