// https://www.codewars.com/kata/5a25ac6ac5e284cfbe000111

// You will be given the first row of the triangle as a string and its your job to return the final colour which would appear in the bottom row as a string. In the case of the example above, you would the given RRGBRGBB you should return G.

//     The input string will only contain the uppercase letters R, G, B and there will be at least one letter so you do not have to test for invalid input.
//     If you are only given one colour as the input, return that colour.

public class Kata {
	private static final int sum = 'R' + 'G' + 'B';

	public static char triangle(final String row) {
		char[] a = row.toCharArray();
		for (int m = a.length - 1; m > 0; m--)
			for (int i = 0; i < m; i++) {
				char c1 = a[i];
				char c2 = a[i + 1];
				a[i] = c1 == c2 ? c1 : (char)(sum - c1 - c2);
			}
		return a[0];
	}
}