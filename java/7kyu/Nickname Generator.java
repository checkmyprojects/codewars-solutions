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

class Generator 
{
      public static String nickname (String name) 
      {
          char word_char[] = name.toCharArray();
          String result = "";
        
          if(word_char.length >= 4)
          {
            switch(word_char[2])
            {
                case 'a':
                case 'e':
                case 'i':
                case 'o':
                case 'u':
                    result = name.substring(0, 4);
                break;
                default:
                    result = name.substring(0, 3);
                break;
            }
          }
          else
          {
              result = "Error: Name too short";
          }
        
          return result;
      }
}