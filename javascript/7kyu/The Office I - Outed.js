// https://www.codewars.com/kata/57ecf6efc7fe13eb070000e1

// Given an object (meet) containing team member names as keys, and their happiness rating out of 10 as the value, you need to assess the overall happiness rating of the group. If <= 5, return 'Get Out Now!'. Else return 'Nice Work Champ!'.

function outed(meet, boss){
    var sum=0;
    var count=0;
    for (var key in meet)
      if (key!=boss)
      {
        sum+=meet[key];
        count++;
      }  
      else
      {
        sum+=meet[key]*2;
        count++;
      }
    return sum/count<=5?'Get Out Now!':'Nice Work Champ!';
  }