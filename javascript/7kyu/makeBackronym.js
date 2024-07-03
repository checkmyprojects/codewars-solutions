// https://www.codewars.com/kata/55805ab490c73741b7000064

//     An acronym deliberately formed from a phrase whose initial letters spell out a particular word or words, either to create a memorable name or as a fanciful explanation of a word's origin.

function makeBackronym(string){
    return string.toUpperCase().split('').map(function(s){
      return dict[s];
    }).join(' ');
  }