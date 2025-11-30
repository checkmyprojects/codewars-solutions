// https://www.codewars.com/kata/59c5f4e9d751df43cf000035

// The vowel substrings in the word codewarriors are o,e,a,io. The longest of these has a length of 2. Given a lowercase string that has alphabetic characters only (both vowels and consonants) and no spaces, return the length of the longest vowel substring. Vowels are any of aeiou. 

class Solution{
    public static int solve(String s){
      int maxCount = 0;
      int currentCount = 0;
      char[] chars = s.toCharArray();
      for(int i = 0; i < chars.length; i++) {
        switch(chars[i]) {
            case 'a':
            case 'e':
            case 'i':
            case 'o':
            case 'u':
              currentCount++;
              if(currentCount > maxCount) {
                maxCount = currentCount;
              }
            break;
            default:
             currentCount = 0;
        }
      }
      return maxCount;
  }
}