// https://www.codewars.com/kata/5639bdcef2f9b06ce800005b

// In this exercise, a string is passed to a method and a new string has to be returned with the first character of each word in the string.

function makeString(s){
    var arr_words = s.split(" ");
    var result = "";
    for (var i=0; i<arr_words.length; i++) {
      var first_letter = arr_words[i].charAt(0);
      result += first_letter;
    }
    return result;
}