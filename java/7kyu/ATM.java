// https://www.codewars.com/kata/5635e7cb49adc7b54500001c

// An ATM has banknotes of nominal values 10, 20, 50, 100, 200 and 500 dollars. You can consider that there is a large enough supply of each of these banknotes.

// You have to write the ATM's function that determines the minimal number of banknotes needed to honor a withdrawal of n dollars, with 1 <= n <= 1500.

// Return that number, or -1 if it is impossible.

// Good Luck!!!

public class ATM {
  
  public int solve(int n) {
    int[] denominations = new int[]{500, 200, 100, 50, 20, 10};
    int result = 0;
    
    for (int denomination: denominations) {
      result += n / denomination;
      n %= denomination;
    }
    
    return n == 0 ? result : -1;
  }
  
}