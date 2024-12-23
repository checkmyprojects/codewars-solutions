// https://www.codewars.com/kata/58e8cad9fd89ea0c6c000258

var kookaCounter = function(laughing) {
    if(laughing === '') return 0;
    
    if(laughing.indexOf("h") == -1 || laughing.indexOf('H') == -1 ) return 1;
    
    let count = 0;
    let letter;
    
    for(let i = 0 ; i < laughing.length; i++){
      if(letter === undefined){
        letter = laughing[i];
        count++
      }
      if(laughing[i] == 'a') continue;
      
      if(laughing[i] !== letter ){
        letter = laughing[i];
        count++
      }
      
    }
    return count;
  }