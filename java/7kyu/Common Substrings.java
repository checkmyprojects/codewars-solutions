// https://www.codewars.com/kata/5669a5113c8ebf16ed00004c

// Given 2 strings, your job is to find out if there is a substring that appears in both strings. You will return true if you find a substring that appears in both strings, or false if you do not. We only care about substrings that are longer than one character. Substrings are case-insensitive, e.g. "aB" and "Ab" should compare equal in this kata.
// Examples:

// "Something", "Fun"  ==> false
// // because "something" and "fun" contain no common substrings
// // (We do not count the 'n' as a substring in this Kata,
// // because it is only 1 character long)

// "Something", "Home" ==> true
// // because both of the strings contain the substring `"me"`
// // (so**ME**thing and ho**ME**).

class Kata
{
  public static boolean SubstringTest(String str1, String str2)
  { 
    for(int i = 0; i < str2.length() - 1; i++)
      if(str1.toLowerCase().contains(str2.toLowerCase().substring(i, i+2))) return true;
    return false;
  }
}