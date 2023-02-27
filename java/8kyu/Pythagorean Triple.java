// https://www.codewars.com/kata/5951d30ce99cf2467e000013

import java.util.Arrays;

public class PythagoreanTriple {
	public int pythagoreanTriple(int[] triple){
        return triple[0] * triple[0] + triple[1] * triple[1] == triple[2] * triple[2] ? 1 : 0;
	}
}