// https://www.codewars.com/kata/57a62154cf1fa5b25200031e

// Write function alternateCase which switch every letter in string from upper to lower and from lower to upper. E.g: Hello World -> hELLO wORLD

class Kata {
    static String alternateCase(final String string) {
    		char[] strings = string.toCharArray();
        for (int i = 0; i < strings.length; i++) {
        	char c = strings[i];
          if (Character.isUpperCase(c))
          	strings[i] = Character.toLowerCase(c);
          else if (Character.isLowerCase(c))
          	strings[i] = Character.toUpperCase(c);
        }
        return new String(strings);
    }
}