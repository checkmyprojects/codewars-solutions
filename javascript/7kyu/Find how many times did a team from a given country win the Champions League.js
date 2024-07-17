// https://www.codewars.com/kata/581b30af1ef8ee6aea0015b9

// Create a function that takes two arguments:
//     An array of objects which feature the season, the team and the country of the Champions League winner.
//     Country (as a string, for example, 'Portugal')
// You function should then return the number which represents the number of times a team from a given country has won. Return 0 if there have been no wins.

function countWins(winnerList, country) {
    return winnerList.filter(item => item.country === country).length;
}