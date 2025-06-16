// https://www.codewars.com/kata/5b043e3886d0752685000009

// Kate and Michael want to buy a pizza and share it. Depending on the price of the pizza, they are going to divide the costs:

//     If the pizza is less than €5,- Michael invites Kate, so Michael pays the full price.
//     Otherwise Kate will contribute 1/3 of the price, but no more than €10 (she's broke :-) and Michael pays the rest.

// How much is Michael going to pay? Calculate the amount with two decimals, if necessary.

const MICHAELS_SHARE = 2 / 3
const MICHAELS_MINIMUM = 5
const KATES_MAXIMUM = 10

const roundToCents = value => Math.round(value * 100) / 100

const michaelsTotal = costs => {
  if (costs < MICHAELS_MINIMUM) return costs
  return Math.max(costs - KATES_MAXIMUM, costs * MICHAELS_SHARE )
}

const michaelPays = costs => roundToCents(michaelsTotal(costs))