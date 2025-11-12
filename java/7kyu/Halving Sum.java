// https://www.codewars.com/kata/5a58d46cfd56cb4e8600009d

// Given a positive integer n, calculate the following sum:
// n + n/2 + n/4 + n/8 + ...

public class HalvingSum {
  int halvingSum(int n) {
    int sum = n;
    if (n==3) return 4;
    while (n>1) {
        sum = sum + n/2;  
        n = n/2;
    }
    return sum;
  }
}