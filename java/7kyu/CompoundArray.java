// https://www.codewars.com/kata/56044de2aa75e28875000017

// You have to create a method "compoundArray" which should take as input two int arrays of different length and return one int array with numbers of both arrays shuffled one by one.

// Input - {1,2,3,4,5,6} and {9,8,7,6} 
// Output - {1,9,2,8,3,7,4,6,5,6}

public class CompoundArray {
    
    public static int[] compoundArray(int[] a, int[] b){
        int[] result = new int[a.length + b.length];
        for (int i = 0, j = 0; i < result.length; j++) {
            if (j < a.length) result[i++] = a[j];
            if (j < b.length) result[i++] = b[j];
        }
        return result;
    }
}