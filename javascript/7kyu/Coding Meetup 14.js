// https://www.codewars.com/kata/583952fbc23341c7180002fd

// You will be given an array of objects representing data about developers who have signed up to attend the next coding meetup that you are organising.
// Your task is to return an object which includes the count of food options selected by the developers on the meetup sign-up form..

function orderFood(list) {
    var orders = {};
    list.forEach(d=>{
      if(orders[d.meal]) orders[d.meal]++;
      else orders[d.meal] = 1;
    });
    return orders;
  }