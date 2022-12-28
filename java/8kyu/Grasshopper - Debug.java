// Debug celsius converter
// Find the errors in the code to get the celsius converter working properly.

// https://www.codewars.com/kata/55cb854deb36f11f130000e1

public class GrassHopper {

    public static String weatherInfo(double temp) {
        double c = convertToCelsius(temp);
        if (c <= 0)
            return (c + " is freezing temperature");
        else
            return (c + " is above freezing temperature");
    }

    public static double convertToCelsius(double temperature) {
        double celsius = (temperature - 32) * 5/9;
        return celsius;
    }
}