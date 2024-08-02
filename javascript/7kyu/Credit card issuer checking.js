// https://www.codewars.com/kata/5701e43f86306a615c001868

// given a credit card number we can determine who the issuer/vendor is with a few basic knowns.

// Complete the function getIssuer() that will use the values shown below to determine the card issuer for a given card number. If the number cannot be matched then the function should return the string Unknown.

function getIssuer(n) {
    var s = n.toString();

    if (/^3[4|7]\d{13}$/.test(s)) return "AMEX";
    if (/^6011\d{12}$/.test(s)) return "Discover";
    if (/^5[1-5]\d{14}$/.test(s)) return "Mastercard";
    if (/^4(\d{12}|\d{15})$/.test(s)) return "VISA";
    
    return "Unknown";
}