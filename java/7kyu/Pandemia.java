// https://www.codewars.com/kata/5e2596a9ad937f002e510435

// ⚠️ The world is in quarantine! There is a new pandemia that struggles mankind. Each continent is isolated from each other but infected people have spread before the warning. ⚠️

// 🗺️ You would be given a map of the world in a type of string:

// string s = "01000000X000X011X0X"

// '0' : uninfected
// '1' : infected
// 'X' : ocean

import static java.util.Arrays.stream;
public class Pandemia {

    public static double infected(String input) {
        final int inf = stream(input.split("X"))
                .filter(s -> s.contains("1"))
                .mapToInt(String::length)
                .sum();
        final long global = input.chars().filter(c -> c != 'X').count();
        return global == 0 ? 0 : 100.0 * inf / global;
    }
}