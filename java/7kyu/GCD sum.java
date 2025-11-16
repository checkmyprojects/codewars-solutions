// https://www.codewars.com/kata/5dd259444228280032b1ed2a

// Given the sum and gcd of two numbers, return those two numbers in ascending order. If the numbers do not exist, return -1, (or NULL in C, tuple (-1,-1) in C#, pair (-1,-1) in C++,None in Rust, array {-1,-1} in Java and Golang).

class GCDsum{
    public static int[] solve(int s, int g){        
        int[] sol = {-1,-1};
        if (s%g == 0) {
          sol[0] = g;
          sol[1] = s-g;
        }
        return sol;
    }
}