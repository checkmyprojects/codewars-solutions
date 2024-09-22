// https://www.codewars.com/kata/5648b12ce68d9daa6b000099

var number = function(busStops){
    let peopleInBus = 0;
    busStops.forEach(([enter, left]) => {
        peopleInBus += enter - left;
    })
    return peopleInBus
}