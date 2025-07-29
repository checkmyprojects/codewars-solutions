// https://www.codewars.com/kata/59a96d71dbe3b06c0200009c

// I will give you an integer. Give me back a shape that is as long and wide as the integer. The integer will be a whole number between 1 and 50.

public class Kata {
    public static final String generateShape(int n) {
        StringBuilder sb = new StringBuilder();
        for (int j=0; j < n; j++) {
            for (int i = 0; i < n; i++) {
                sb.append("+");
            }
            sb.append("\n");
        }
        return sb.toString().trim();
    }
}