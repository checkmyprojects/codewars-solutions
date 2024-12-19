// https://www.codewars.com/kata/5857e8bb9948644aa1000246

// You will get an array as input with time durations as string in the following format: HH:MM:SS. Each duration represents the time taken by Santa to deliver a present. Determine whether he can do it in 24 hours or not. In case the time required to deliver all of the presents is exactly 24 hours, Santa can complete the delivery ;-) .

function determineTime(durations){
    let sec = 0;
    let str = [];
    for (let i = 0; i < durations.length; i++) {
      str = durations[i].split(":");
      sec += +str[0] * 3600 + +str [1] * 60 + +str[2];
     }
     return sec/3600 <=24 ? true : false;
 }