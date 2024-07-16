// https://www.codewars.com/kata/5f709c8fb0d88300292a7a9d

// Some people have been killed!

// You have managed to narrow the suspects down to just a few. Luckily, you know every person who those suspects have seen on the day of the murders.
// Task.

// Given a dictionary with all the names of the suspects and everyone that they have seen on that day which may look like this:

function killer(suspectInfo, dead) {
    for (let name in suspectInfo) {
      if (dead.every(deadPerson => suspectInfo[name].includes(deadPerson))) {
        return name;
      }
    }
}