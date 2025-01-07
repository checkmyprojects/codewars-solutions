// https://www.codewars.com/kata/5b18e9e06aefb52e1d0001e9

// stations is a list/array of distances (miles) from one station to the next along the Pony Express route.
// Implement the riders method/function, to return how many riders are necessary to get the mail from one end to the other.

function riders(stations) {  
    let rider = 1
    let distance = 0
    for(s of stations){
      if(distance + s > 100){
        rider += 1
        distance = s
      }
      else {
        distance += s
      }
    }
    return rider
  }