// https://www.codewars.com/kata/594093784aafb857f0000122

// Find the difference between two collections. The difference means that either the character is present in one collection or it is present in other, but not in both. Return a sorted list with the difference.

// The collections can contain any character and can contain duplicates.

import java.util.Collection;
import java.util.Set;
import java.util.HashSet;
import java.util.List;
import java.util.ArrayList;

class Kata {
    static List<Character> diff(final Collection<Character> aa, final Collection<Character> bb) {
        Set<Character> a = new HashSet<>(aa);
        Set<Character> b = new HashSet<>(bb);
        
        Set<Character> intersection = new HashSet<>(a);
        intersection.retainAll(b);
        
        Set<Character> union = new HashSet<>(a);
        union.addAll(b);

        // union minus intersection equals symmetric-difference
        Set<Character> symmetricDifference = new HashSet<>(union);
        symmetricDifference.removeAll(intersection);
        
        List<Character> result = new ArrayList<>(symmetricDifference);
        result.sort(Character::compareTo);
        
        return result;
    }
}