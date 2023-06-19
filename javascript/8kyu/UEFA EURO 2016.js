// Finish the uefaEuro2016() function so it return string just like in the examples below:

// uefaEuro2016(['Germany', 'Ukraine'],[2, 0]) // "At match Germany - Ukraine, Germany won!"
// uefaEuro2016(['Belgium', 'Italy'],[0, 2]) // "At match Belgium - Italy, Italy won!"
// uefaEuro2016(['Portugal', 'Iceland'],[1, 1]) // "At match Portugal - Iceland, teams played draw."

// https://www.codewars.com/kata/57613fb1033d766171000d60

function uefaEuro2016(commands, scores){
    if (scores[0] == scores[1])
      return `At match ${commands[0]} - ${commands[1]}, commands played draw.`;
    if (scores[0] < scores[1])
      return `At match ${commands[0]} - ${commands[1]}, ${commands[1]} won!`;
    return `At match ${commands[0]} - ${commands[1]}, ${commands[0]} won!`;
  }