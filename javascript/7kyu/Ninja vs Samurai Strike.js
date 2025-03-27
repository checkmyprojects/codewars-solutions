// https://www.codewars.com/kata/517b0f33cd023d848d000001

// Something is wrong with our Warrior class. The strike method does not work correctly. The following shows an example of this code being used:

var Warrior = function(name){
    this.name = name;  
    this.health = 100;
}

Warrior.prototype.strike = function(enemy, swings){
    enemy.health = Math.max(0, enemy.health - (swings * 10));   
}