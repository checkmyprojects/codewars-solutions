// https://www.codewars.com/kata/5831c204a31721e2ae000294

// When provided with a String, capitalize all vowels
// For example:
// Input : "Hello World!"
// Output : "HEllO WOrld!"
// Note: Y is not a vowel in this kata.

public class Kata {
    public static String swap(String st){
     StringBuilder sb = new StringBuilder();
        for (char ch : st.toCharArray()) {
            char t = Character.toUpperCase(ch);
            if (t == 'A' || t == 'E' || t == 'I' || t == 'O' || t == 'U') {
                sb.append(t);
            } else {
                sb.append(ch);
            }
        }

        return sb.toString();
    }
}