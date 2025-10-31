// https://www.codewars.com/kata/57fd696e26b06857eb0011e7

// Your goal is to create a function dative() (Dative() in C#) which returns the valid form of a valid Hungarian word w in dative case i. e. append the correct suffix nek or nak to the word w based on vowel harmony rules.

public class Kata {
    public static String dative(String word) {
        String w1 = word.replaceAll("[eéiíöőüű]","1");
        String w2 = word.replaceAll("[aáoóuú]","2");
        return w1.lastIndexOf("1")>w2.lastIndexOf("2")? word+"nek":word+"nak";
    }
}

