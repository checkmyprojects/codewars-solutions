// In this first kata in the series, you need to define a Hero prototype to be used in a terminal game. The hero should have the following attributes:

// https://www.codewars.com/kata/55e8aba23d399a59500000ce

function Hero (name) {
    this.name = name || 'Hero';
    this.position = '00';
    this.health = 100;
    this.damage = 5;
    this.experience = 0;
}