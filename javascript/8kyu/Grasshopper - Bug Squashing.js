// You are creating a text-based terminal version of your favorite board game. In the board game, each turn has six steps that must happen in this order: roll the dice, move, combat, get coins, buy more health, and print status.

// https://www.codewars.com/kata/56214b6864fe8813f1000019

var health = 100
var position = 0
var coins = 0

function main () {
  rollDice();
  move();
  combat();
  getCoins();
  buyHealth();
  printStatus();
}