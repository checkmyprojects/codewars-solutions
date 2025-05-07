// https://www.codewars.com/kata/59778cb1b061e877c50000cc

// Create a function that takes an array of letters, and combines them into words in a sentence.

// The array will be formatted as so:

// [
//   ['J','L','L','M'],
//   ['u','i','i','a'],
//   ['s','v','f','n'],
//   ['t','e','e','']
// ]

// The function should combine all the 0th indexed letters of each sub-array to create the word Just, all the 1st indexed letters of each sub-array to create the word Live, etc.

// If a word is shorter than the maximum length, the remaining positions in the sub-array will contain empty strings (e.g., the last element in the last sub-array).

function arrAdder(arr) {
    var sentence = "";
    for(var i = 0; i < arr[0].length; i++){
      for(var j = 0; j < arr.length; j++){
        sentence+=arr[j][i];
      }
      sentence+=" ";
    }
    return sentence.trim();
  }