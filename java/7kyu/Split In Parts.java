// https://www.codewars.com/kata/5650ab06d11d675371000003

// The aim of this kata is to split a given string into different strings of equal size (note size of strings is passed to the method)

public class InParts {
    public static String splitInParts(String s, int partLength) {
       StringBuilder sb = new StringBuilder(s);
       for (int i = partLength++; i < sb.length(); i += partLength){
         sb.insert(i, " ");
       }
       return sb.toString();
    }
}