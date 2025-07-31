// https://www.codewars.com/kata/5512e5662b34d88e44000060

// You receive some random elements as a space-delimited string. Check if the elements are part of an ascending sequence of integers starting with 1, with an increment of 1 (e.g. 1, 2, 3, 4).

// Return:

//     0 if the elements can form such a sequence, and no number is missing ("not broken", e.g. "1 2 4 3")
//     1 if there are any non-numeric elements in the input ("invalid", e.g. "1 2 a")
//     n if the elements are part of such a sequence, but some numbers are missing, and n is the lowest of them ("broken", e.g. "1 2 4" or "1 5")

import java.util.Arrays;
import java.util.List;
import java.util.stream.Collectors;

public class BrokenSequence {
		public int findMissingNumber(String sequence) {
        if (sequence.isEmpty()) return 0;

        List<String> seq = Arrays.asList(sequence.split(" "));

        if (!seq.stream().map(s -> s.charAt(0)).allMatch(Character::isDigit)) {
            return 1;
        }
        else {
            List<Integer> intSeq = seq.stream()
                    .map(Integer::parseInt)
                    .sorted()
                    .collect(Collectors.toList());
            return findMissing(intSeq);
        }
    }

    private int findMissing(List<Integer> intSeq) {
        int expected = intSeq.get(0);
        if (expected != 1) return 1;

        for (int elem : intSeq) {
            if (elem != expected) {
                return expected;
            }
            expected++;
        }
        return 0;
    }
}