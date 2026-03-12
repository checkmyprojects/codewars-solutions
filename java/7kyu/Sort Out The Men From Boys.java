// https://www.codewars.com/kata/5af15a37de4c7f223e00012d

// Given an array/list [] of n integers , Separate The even numbers from the odds , or Separate the men from the boys

import java.util.*;


public class Kata {
    public static int[] menFromBoys(final int[] values) {
		int[] result;
		Set<Integer> evenSet = new TreeSet<>();
		Set<Integer> oddSet = new TreeSet<>();

		for (int value : values) {
			if (value % 2 == 0) {
				evenSet.add(value);
			} else {
				oddSet.add(value);
			}
		}
		List<Integer> list = new ArrayList<>(oddSet);
		Collections.reverse(list);
		result = new int[evenSet.size() + oddSet.size()];
		int counter = 0;

		for (Integer elem : evenSet) {
			result[counter++] = elem;
		}
		
		for(Integer elem : list) {
			result[counter++] = elem;
		}
		
		return result;
    }
}