// https://www.codewars.com/kata/574c5075d27783851800169e

function animals(heads, legs) {
    const cows = legs / 2 - heads;
    const chickens = heads - cows;
    
    if (legs & 1 || chickens > heads || cows > heads)
      return "No solutions";
    else
      return [chickens, cows];
  }