// https://www.codewars.com/kata/5572392fee5b0180480001ae

// Solve the horror of unstandardized keypads by providing a function that converts computer input to a number as if it was typed on a phone.

public class Bud {
    public static String computerToPhone(String n) {
        return String.join("", n.chars().mapToObj(x -> {
            int z = Character.getNumericValue(x);
            if (z > 6) return z - 6 + "";
            if (z == 0) return "0";
            if (z < 4) return z + 6 + "";
            return z + "";
        }).toArray(String[]::new));
    }
}