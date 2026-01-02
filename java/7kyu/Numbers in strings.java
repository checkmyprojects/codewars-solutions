// https://www.codewars.com/kata/59dd2c38f703c4ae5e000014

// In this Kata, you will be given a string that has lowercase letters and numbers. Your task is to compare the number groupings and return the largest number. Numbers will not have leading zeros.

// For example, solve("gh12cdy695m1") = 695, because this is the largest of all number groupings. 

import java.util.ArrayList;
import java.util.Collections;

class Solution{
    public static int solve(String s) {
        if (s.isEmpty()) return 0; 
        ArrayList<Integer> list = new ArrayList<>();
        StringBuilder builder = new StringBuilder();
        for (char ch : s.toCharArray()) {
            if (Character.isDigit(ch)) {
                builder.append(ch);
            } else {
                if (builder.length() > 0) {
                    list.add(Integer.parseInt(builder.toString()));
                    builder.setLength(0);
                }
            }
        }
        if (builder.length() > 0) {
            list.add(Integer.parseInt(builder.toString()));
        }
        Collections.sort(list);

        return list.get(list.size() - 1);
    }
}