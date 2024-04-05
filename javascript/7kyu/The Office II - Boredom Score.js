// https://www.codewars.com/kata/57ed4cef7b45ef8774000014

function boredom(staff){
    var map = {
      accounts:1,
      finance:2,
      canteen:10,
      regulation:3,
      trading: 6,
      change:6,
      IS:8,
      retail:5,
      cleaning:4,
      'pissing about':25
    };
    
    var score = Object.keys(staff).reduce(
      function(a,b){       
        return a+map[staff[b]]
     },0); 
    
    return score <= 80 ? 'kill me now': score < 100 && score > 80 ? 'i can handle this' : 'party time!!';
 }