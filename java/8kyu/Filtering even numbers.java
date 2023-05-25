// Fix the bug in Filtering method

// The method is supposed to remove even numbers from the list and return a list that contains the odd numbers.

// However, there is a bug in the method that needs to be resolved.


// https://www.codewars.com/kata/566dc566f6ea9a14b500007b

import java.util.List;
import java.util.ArrayList;
public class Kata13December {
    public static List<Integer> filterOddNumber(List<Integer> listOfNumbers)
    {
        List<Integer> res = new ArrayList(listOfNumbers);
        for (int i = 0; i < res.size(); i++)
        {
            if (res.get(i)%2 == 0)
            {
                res.remove(i);
                i--;
            }
        }
        return res;
    }
}