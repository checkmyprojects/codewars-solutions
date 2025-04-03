// https://www.codewars.com/kata/55736129f78b30311300010f

// You have to write a function pattern which creates the following pattern upto n number of rows. If the Argument is 0 or a Negative Integer then it should return "" i.e. empty string.

function pattern(n) {
    var number = "", output = "";
    while (n > 0) {
        number = n + number;
        output = number + (output ? "\n" : "") + output;
        n--;
    }
    return output;
}