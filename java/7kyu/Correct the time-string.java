// https://www.codewars.com/kata/57873ab5e55533a2890000c7

// A new task for you!

//     You have to create a method, that corrects a given time string.
//     There was a problem in addition, so many of the time strings are broken.
//     Time is formatted using the 24-hour clock, so from 00:00:00 to 23:59:59.

// Examples

// "09:10:01" -> "09:10:01"  
// "11:70:10" -> "12:10:10"  
// "19:99:99" -> "20:40:39"  
// "24:01:01" -> "00:01:01"  

// If the input-string is null or empty return exactly this value! (empty string for C++) If the time-string-format is invalid, return null. (empty string for C++)

public class Solution {
 public static String timeCorrect(String timestring) {
		if (timestring == null || !timestring.matches("^\\d{2}:\\d{2}:\\d{2}$")) {
			return null;
		}
		String[] split = timestring.split(":");
		int h = Integer.parseInt(split[0]);
		int m = Integer.parseInt(split[1]);
		int s = Integer.parseInt(split[2]);
		m += s / 60;
		s = s % 60;
		h += m / 60;
		m = m % 60;
		h = h % 24;
		return String.format("%02d:%02d:%02d", h, m, s);
	}
}