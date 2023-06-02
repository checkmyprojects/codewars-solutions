// https://www.codewars.com/kata/5b609ebc8f47bd595e000627

import java.util.HashMap;
import java.util.Map;

public class Solution {

    private final static Double G = 6.67e-11;

    public static double solution(double[] arrVal, String[] arrUnit) {
        Map<String, Double> convertions = new HashMap<>();
        convertions.put("kg", 1.0);
        convertions.put("g", 1e-3);
        convertions.put("mg", 1e-6);
        convertions.put("μg", 1e-9);
        convertions.put("lb", 0.453592);
        convertions.put("m", 1.0);
        convertions.put("cm", 1e-2);
        convertions.put("mm", 1e-3);
        convertions.put("μm", 1e-6);
        convertions.put("ft", 0.3048);

        double m1 = arrVal[0] * convertions.get(arrUnit[0]);
        double m2 = arrVal[1] * convertions.get(arrUnit[1]);
        double r = arrVal[2] * convertions.get(arrUnit[2]);

        return G * m1 * m2 / r / r;
    }

}