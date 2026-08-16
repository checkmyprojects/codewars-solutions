// https://www.codewars.com/kata/6a5ff16900f402eefa5198ff

// Introduction

// You are blindfolded, with n coins on a table. You know that k coins are heads up and the others are tails up, but not which ones are which.
// Task

// Divide the coins in two groups with the same number of heads in each group. You can flip the coins any number of times.

// Your method should work every time.
// Input
// ⬬ coins [list of Coin]

// The coins.
// Coins have a flip method that flips the coin and returns it.

// Examples:

// // flip the first coin
// coins[0].flip();

// // flip every third coin
// for ( let i = 2; i in coins; i += 3 )
//   coins[i].flip();

// // flip even coins and put them in a list
// coins.filter( (_,i) => i % 2 === 0 ).map( coin => coin.flip() )

// ⬬ k [integer]

// The number of coins that are heads up.
// Output

// Two lists of coins, representing the two groups.

// The two lists together should contain all the coins exactly once (no missing coins, no duplicates).

// The number of coins heads up in first and second list should be the same.

function splitCoins(coins, k) {
    const group1 = coins.slice(0, k);
    const group2 = coins.slice(k);
    
    for (let coin of group1) {
        coin.flip();
    }
    
    return [group1, group2];
}