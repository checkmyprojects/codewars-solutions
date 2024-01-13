// https://www.codewars.com/kata/59d9ff9f7905dfeed50000b0

// Given an array of words, return an array of the number of letters that occupy their positions in the alphabet for each word. For example,

function solve(arr){  
    const alphabet = 'abcdefghijklmnopqrstuvwxyz'
    
    let final = []
    for (let i = 0; i < arr.length; i++) {
      let count = 0;
      for (let j = 0; j < arr[i].length; j++) {
        if (arr[i][j].toLowerCase() === alphabet[j]) {
          count++;
        }
      }
      final.push(count); 
    }
    return final
  };