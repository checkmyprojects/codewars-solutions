// An NBA game runs 48 minutes (Four 12 minute quarters). Players do not typically play the full game, subbing in and out as necessary. Your job is to extrapolate a player's points per game if they played the full 48 minutes.

// Write a function that takes two arguments, ppg (points per game) and mpg (minutes per game) and returns a straight extrapolation of ppg per 48 minutes rounded to the nearest tenth. Return 0 if 0.

// https://www.codewars.com/kata/587c2d08bb65b5e8040004fd

function pointsPer48(ppg, mpg) {
    return mpg ? Number((ppg * (48 / mpg)).toFixed(1)) : 0
   }