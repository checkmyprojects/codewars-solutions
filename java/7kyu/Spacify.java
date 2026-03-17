// https://www.codewars.com/kata/57f8ee485cae443c4d000127

// Modify the spacify function so that it returns the given string with spaces inserted between each character.

public class Spacify {
    public static String spacify(String str){
        return str.replaceAll("", " ").trim();
    }
}