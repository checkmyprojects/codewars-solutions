// https://www.codewars.com/kata/59f7a0a77eb74bf96b00006a

// Complete the function which accepts two strings and calculates the golf score of a game. Both strings will be of length 18, and each character in the string will be a number between 1 and 9 inclusive. 

function golfScoreCalculator(parList, scoreList){
    result = 0;
    for (let i = 0; i < parList.length; ++i) {
        result += scoreList[i] - parList[i];
    }
    return result;
}