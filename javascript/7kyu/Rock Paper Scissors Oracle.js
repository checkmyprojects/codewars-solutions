// https://www.codewars.com/kata/580535462e7b330bd300003d

// You are the rock paper scissors oracle.

// Famed throughout the land, you have the incredible ability to predict which hand gestures your opponent will choose out of rock, paper and scissors.

// Unfortunately you're no longer a youngster, and have trouble moving your hands between rounds. For this reason, you can only pick a single gesture for each opponent. If it's possible for you to win, you will, but you're also happy to tie.

// Given an array of gestures — for example ["paper", "scissors", "scissors"] — return the winning gesture/s in the order in which they appear in the title, separated by a forward slash. For example, if rock and scissors could both be used to win you would return:

// "rock/scissors"

// If it's not possible for you to win then return:

// "tie"

function oracle(gestures) {
  let result = [];
  
  let obj = {
    "rock": 0,
    "paper": 0,
    "scissors": 0
  }
  
  for (let i = 0; i < gestures.length; i++) {
    let gesture = gestures[i];
    obj[gesture]++;
  }
  
  if (obj.scissors > obj.paper) result.push("rock");
  if (obj.rock > obj.scissors) result.push("paper");
  if (obj.paper > obj.rock) result.push("scissors");
  
  return result.join("/") || "tie";
}