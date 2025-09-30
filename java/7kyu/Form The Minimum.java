// https://www.codewars.com/kata/5ac6932b2f317b96980000ca

// Given a list of digits, return the smallest number that could be formed from these digits, using the digits only once (ignore duplicates). 

import java.util.stream.Collectors;
import java.util.*;
public class Minimum{

	public static int minValue(int[] values){
		String s = Arrays.stream(values)
                .sorted()
                .distinct()
                .mapToObj(Integer::toString)
                .collect(Collectors.joining(""));
        return Integer.valueOf(s);
	}

}