// Color Ghost

// Create a class Ghost

// Ghost objects are instantiated without any arguments.

// Ghost objects are given a random color attribute of "white" or "yellow" or "purple" or "red" when instantiated

// ghost = new Ghost();
// ghost.color //=> "white" or "yellow" or "purple" or "red"

// https://www.codewars.com/kata/53f1015fa9fe02cbda00111a

var Ghost = function() {
    var colors = ["white", "yellow", "purple", "red"];
    var colorIndex = Math.floor(Math.random() * (colors.length));
    this.color = colors[colorIndex];
  }