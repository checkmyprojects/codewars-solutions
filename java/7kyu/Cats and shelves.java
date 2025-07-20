// https://www.codewars.com/kata/62c93765cef6f10030dfa92b

// Description

// An infinite number of shelves are arranged one above the other in a staggered fashion.
// The cat can jump either one or three shelves at a time: from shelf i to shelf i+1 or i+3 (the cat cannot climb on the shelf directly above its head), according to the illustration:

// Input

// Start and finish shelf numbers (always positive integers, finish no smaller than start)
// Task

// Find the minimum number of jumps to go from start to finish

public class Kata {
    public static int solution(int start, int finish){
        int diff = (finish - start);
        return diff/3 + diff % 3;
    }
}