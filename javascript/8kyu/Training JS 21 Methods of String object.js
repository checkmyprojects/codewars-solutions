// https://www.codewars.com/kata/5729b103dd8bac11a900119e

function fiveLine(s){
    s = s.trim();
    var tmp = s;
    var res = [s];
    
    for (var i = 1; i < 5; i++) {
         res.push(s += tmp);
    } 
    return res.join("\n");
  }