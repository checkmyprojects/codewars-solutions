// https://www.codewars.com/kata/5641275f07335295f10000d0

// You're in a restaurant with your friends and it's time to go, but there's still one big problem...the bill. Who will pay what? Lucky for you, you've got your computer handy! One simple function and the bill is paid——fairly, too!

// The function should take one parameter: an object/dict with two or more name-value pairs that represent the members of the group and the amount spent by each.

// Your function should return an object/dict with the same names, showing how much money the members should pay or receive.

function splitTheBill(x) {
    var average = 0;
    var count = 0;
    
    for(item in x){
      average += x[item];
      count++;
    }
    average = average / count;  
    
    for(item in x){
      x[item] = Math.round((x[item] - average) * 100) / 100;
    }
    
    return x;
  }