// https://www.codewars.com/kata/5701800886306a876a001031

// Suzuki needs help lining up his students!

// Today Suzuki will be interviewing his students to ensure they are progressing in their training. He decided to schedule the interviews based on the length of the students name in descending order. The students will line up and wait for their turn.

// You will be given a string of student names. Sort them and return a list of names in descending order.

import java.util.Arrays;
import java.util.Collections;

public class Kata
{
   public static String[] lineupStudents(String students)
    {
        String[] res = students.split(" ");
        Arrays.sort(res, Collections.reverseOrder());

        for (int j=0; j< res.length; j++){
        for(int i=0; i<res.length-1; i++) {
            if (res[i + 1].length() > res[i].length()) {
                String temp = "";
                temp = res[i];
                res[i] = res[i + 1];
                res[i + 1] = temp;
            }
        }

        }

        return res;
    }
}