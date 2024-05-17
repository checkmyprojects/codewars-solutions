// https://www.codewars.com/kata/57c1ab3949324c321600013f

// Your task is to write a function toLeetSpeak that converts a regular english sentence to Leetspeak.

// More about LeetSpeak You can read at wiki -> https://en.wikipedia.org/wiki/Leet

// Consider only uppercase letters (no lowercase letters, no numbers) and spaces.

function toLeetSpeak(str) {
    var alphabet =
    {
      A : '@',
      B : '8',
      C : '(',
      E : '3',
      G : '6',
      H : '#',
      I : '!',
      L : '1',
      O : '0',
      S : '$',
      T : '7',
      Z : '2'
    }
    
    for (var i in alphabet)
    {
      var regex = new RegExp(i, 'g');
      str = str.replace(regex, alphabet[i]);
    }
    
    return str;
  }