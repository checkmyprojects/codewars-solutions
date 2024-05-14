// https://www.codewars.com/kata/5831c204a31721e2ae000294

// When provided with a String, capitalize all vowels
// For example:
// Input : "Hello World!"
// Output : "HEllO WOrld!"
// Note: Y is not a vowel in this kata.

function swap(st){
    var letters = st.split("");
    var vowels = ["a", "e", "i", "o", "u"];
    for (var i = 0; i < letters.length; i++){
      var char = letters[i];
      if (vowels.indexOf(char) >-1)
        letters[i] = char.toUpperCase();
    }
    return letters.join("");
}