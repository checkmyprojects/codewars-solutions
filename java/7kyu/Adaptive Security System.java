// https://www.codewars.com/kata/69b58aaee8f1deef7ece7d0e

// A security system protects a network from intrusion attempts.

// Hackers try to breach the system one by one, in the order given.

// Each hacker has a skill level.

// The system starts with a given security level.

// Rules:

// For each hacker:

//     If the hacker's skill is strictly greater than the current security level, the hacker successfully breaches the system.
//     Otherwise, the system blocks the attack and learns from it, increasing its security level.

// Each blocked attack increases the security level by a fixed amount.

// Your task is to return the number of successful breaches.

// If there are no hackers, return 0.

// Example

// Initial values:

// Hackers: [7, 6, 8, 9]
// securityLevel: 6
// increase: 2

// Step-by-step:

// Hacker 7 vs security 6 → breach → security stays 6
// Hacker 6 vs security 6 → blocked → security becomes 8
// Hacker 8 vs security 8 → blocked → security becomes 10
// Hacker 9 vs security 10 → blocked

// Result:

// 1

public class Solution {
  public static int breachAttempts(int[] hackers, int securityLevel, int increase) {
    int sum = 0;
    int i = 0;
    for (i = 0; i < hackers.length; i++) {
      if (hackers[i] <= securityLevel) {
        securityLevel += increase; 
      }
      else if(hackers[i] > securityLevel) {
        sum += 1;
      }
    }
    return sum;
  }
}