// https://www.codewars.com/kata/5700c9acc1555755be00027e

// Input:

//     a string strng
//     an array of strings arr

// Output of function contain_all_rots(strng, arr) (or containAllRots or contain-all-rots):

//     a boolean true if all rotations of strng are included in arr
//     false otherwise

import java.util.List;

public class Rotations {
    
    public static Boolean containAllRots(String strng, List<String> arr) {
        for(int i=0;i<strng.length();i++)
          if(!arr.contains(strng.substring(i,strng.length())+strng.substring(0,i)))
            return false;
        return true;
    }
}