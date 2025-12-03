// https://www.codewars.com/kata/581e1d083a4820eb4f00004f

public class Kata
{
	public static int mod256WithoutMod(int number) {
		return number - ((int) number / 256) * 256;
	}
}