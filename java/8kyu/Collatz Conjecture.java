// https://www.codewars.com/kata/577a6e90d48e51c55e000217

interface CollatzConjecture {
  static int hotpo(int n) {
    return n > 1 ? hotpo(n % 2 > 0 ? 3 * n + 1 : n / 2) + 1 : 0;
  } 
}