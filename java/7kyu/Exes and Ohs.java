// Check to see if a string has the same amount of 'x's and 'o's. The method must return a boolean and be case insensitive. The string can contain any char.

// Examples input/output:

// XO("ooxx") => true
// XO("xooxx") => false
// XO("ooxXm") => true
// XO("zpzpzpp") => true // when no 'x' and 'o' is present should return true
// XO("zzoo") => false

// https://www.codewars.com/kata/55908aad6620c066bc00002a

public class XO {
	public static boolean getXO(String str) {
		int x = 0, o = 0;
		for(int i = 0; i < str.length(); i++){
			if(str.toUpperCase().charAt(i) == 'O') o++;
			if(str.toUpperCase().charAt(i) == 'X') x++;
		}
		return x == o;
	}
}