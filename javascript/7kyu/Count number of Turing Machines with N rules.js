// https://www.codewars.com/kata/6809e5a484e02d7d4cac146d

// A Turing Machine is a mathematical model of computation describing an abstract machine that manipulates symbols on a strip of tape according to a table of rules. Despite the model's simplicity, it is capable of implementing any computer algorithm.

// All the rule table tells us is: for each state: if the bit at the current position of the head is a 0 then we take some action. But if the bit at the current position of the head is a 1 then we take a different action.

// An action is either HALT or a 3-part tuple: [write 0 or 1, move Left or Right, go to state 1..N]

// Here's an example of a program with just one state:

// const states = {
//   "A": [
//     [1, "left", "A"],
//     [0, "right", "A"]
//   ]
// }

// Example of a 3-state rule table (in pseudo-code, this time):

// State 1:
//   0 -> (1, L, 2)
//   1 -> (0, R, 2)
// State 2:
//   0 -> (1, L, 3)
//   1 -> (0, R, 3)
// State 3:
//   0 -> HALT
//   1 -> (0, R, 1)

// Task

// Implement countRuleTables(n) to return the number of unique rule-tables as a BigInt.
// Input

// n — the number of states in the Turing Machine. Each state must define actions for both 0 and 1.

// lower bound (inclusive): 1

// upper bound (exclusive): 250 (may change based on feedback while kata is in beta)

function countRuleTables(n) {
  const states = BigInt(n);
  return (4n * states + 1n) ** (2n * states);
}