// https://www.codewars.com/kata/58bf9bd943fadb2a980000a7

function whoIsPaying(name){
    return (name.length>2)?([name, name.substr(0,2)]):[name];
  }