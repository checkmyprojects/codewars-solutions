// Write a function that returns the total surface area and volume of a box as an array: [area, volume]

// https://www.codewars.com/kata/565f5825379664a26b00007c

public class Kata {
    public static int[] getSize(int w,int h,int d) {
        return new int[] { 2 * (w*h+h*d+d*w) , w*d*h};
    }
}