// https://www.codewars.com/kata/58941fec8afa3618c9000184

// Each day a plant is growing by upSpeed meters. Each night that plant's height decreases by downSpeed meters due to the lack of sun heat. Initially, plant is 0 meters tall. We plant the seed at the beginning of a day. We want to know when the height of the plant will reach a certain level.

function growingPlant(upSpeed, downSpeed, desiredHeight) {  
    var i = 1;
    for (var height = upSpeed; height < desiredHeight; height = height + upSpeed){
      height = height - downSpeed;
      i++;   
    }
    return i;
  }