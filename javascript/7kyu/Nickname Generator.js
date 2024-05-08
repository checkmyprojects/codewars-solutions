// https://www.codewars.com/kata/593b1909e68ff627c9000186

// Nickname Generator

// Write a function, nicknameGenerator that takes a string name as an argument and returns the first 3 or 4 letters as a nickname.

// If the 3rd letter is a consonant, return the first 3 letters.

// nickname("Robert") //=> "Rob"
// nickname("Kimberly") //=> "Kim"
// nickname("Samantha") //=> "Sam"

// If the 3rd letter is a vowel, return the first 4 letters.

// nickname("Jeannie") //=> "Jean"
// nickname("Douglas") //=> "Doug"
// nickname("Gregory") //=> "Greg"

// If the string is less than 4 characters, return "Error: Name too short".

function nicknameGenerator(name) {
    if (name.length < 4) {
      return "Error: Name too short";
    } else if ("aeiou".indexOf(name[2].toLowerCase()) != -1) {
      return name.slice(0, 4);
    } else {
      return name.slice(0, 3);
    }
  }