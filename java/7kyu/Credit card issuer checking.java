// https://www.codewars.com/kata/5701e43f86306a615c001868

// given a credit card number we can determine who the issuer/vendor is with a few basic knowns.

// Complete the function getIssuer() that will use the values shown below to determine the card issuer for a given card number. If the number cannot be matched then the function should return the string Unknown.

import static java.util.regex.Pattern.matches;
public class Kata { 
  public static String getIssuer(String cn) {
    if (matches("^3[4|7].{13}$", cn)) return "AMEX";
    if (matches("^6011.{12}$", cn)) return "Discover";
    if (matches("^5[1-5].{14}$", cn)) return "Mastercard";
    if (matches("^4.{12}(...)?$", cn)) return "VISA";
    return "Unknown";
  }
}