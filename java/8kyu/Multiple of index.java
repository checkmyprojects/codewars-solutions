// Return a new array consisting of elements which are multiple of their own index in input array (length > 1).

// https://www.codewars.com/kata/5a34b80155519e1a00000009

import java.util.ArrayList;

public class ZywOo {
    public static int[] multipleOfIndex(int[] array) {
        ArrayList<Integer> temp = new ArrayList<Integer>();
        for (int i = 1; i < array.length; i++) {
            if (array[i] % i == 0) {
                temp.add(array[i]);
            }
        }
        int[] done = new int[temp.size()];
        for (int i = 0; i < temp.size(); i++) {
            done[i] = temp.get(i);
        }
        return done;
    }
}