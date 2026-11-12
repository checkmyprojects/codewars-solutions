// https://www.codewars.com/kata/64fc00392b610b1901ff0f17

// Let's say that there exists a machine that gives out free coins, but with a twist!

// Separating two people is a wall, and this machine is placed in such a way that both people are able to access it. Spending a coin in this machine will give the person on the other side 3 coins and vice versa.

// If both people continually spend coins for each other (SHARING), then they'll both gain a net profit of 2 coins per turn. However, there is always the possibility for someone to act selfishly (STEALING): they spend no coins, yet they still receive the generous 3 coin gift from the other person!

// The Challenge

// Assuming that both people start with 3 coins each, create a function that calculates both people's final number of coins. You will be given two arrays of strings, with each string being the words "share" or "steal".
// Examples

// ["share"], ["share"] ➞ [5, 5]
// // Both people spend one coin, and receive 3 coins each.

// ["steal"], ["share"] ➞ [6, 2]
// // Person 1 gains 3 coins, while person 2 loses a coin.

// ["steal"], ["steal"] ➞ [3, 3]
// // Neither person spends any coins and so no one gets rewarded.

// ["share", "share", "share"], ["steal", "share", "steal"] ➞ [3, 11]

function getCoinBalances(lst1, lst2) {
  let per1 = 3;
  let per2 = 3;

  for (let i = 0; i < lst1.length; i++) {
    if (lst1[i] === "share" && lst2[i] === "share") {
      per1 += 2;
      per2 += 2;
      continue;
    }

    if (lst1[i] === "share") {
      per1 -= 1;
      per2 += 3;
    }

    if (lst2[i] === "share") {
      per2 -= 1;
      per1 += 3;
    }
  }

  return [per1, per2];
}