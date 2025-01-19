// https://www.codewars.com/kata/57fd696e26b06857eb0011e7

// Your goal is to create a function dative() (Dative() in C#) which returns the valid form of a valid Hungarian word w in dative case i. e. append the correct suffix nek or nak to the word w based on vowel harmony rules.

function dative(word){
    var str = word;
    var nekArr = ["e","é","i","í","ö","ő","ü","ű"];
    var nakArr = ["a","á","o","ó","u","ú"];
    for(var i=str.length-1;i>=0;i--){
      if(nekArr.indexOf(str[i])!==-1) return str + "nek";
      if(nakArr.indexOf(str[i])!==-1) return str + "nak";
    }
  }