// https://www.codewars.com/kata/65128732b5aff40032a3d8f0

// Given two strings comprised of + and -, return a new string which shows how the two strings interact in the following way:

//     When positives and positives interact, they remain positive.
//     When negatives and negatives interact, they remain negative.
//     But when negatives and positives interact, they become neutral, and are shown as the number 0.

function neutralise(s1, s2) {
    let res = "";
    for(let i = 0; i < s1.length; i++) {
        res += s1[i] !== s2[i]? "0": s1[i];
    }
    return res;
}