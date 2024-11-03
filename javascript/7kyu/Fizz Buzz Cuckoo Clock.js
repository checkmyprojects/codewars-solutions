// https://www.codewars.com/kata/58485a43d750d23bad0000e6

function fizzBuzzCuckooClock(time) {
    let [hour, minute] = time.split(':');
    return minute ==  0 ? "Cuckoo ".repeat(hour % 12 || 12).trim() :
      minute      == 30 ? "Cuckoo" : 
      minute % 15 ==  0 ? "Fizz Buzz" :
      minute % 3  ==  0 ? "Fizz" :
      minute % 5  ==  0 ? "Buzz" : 
                          "tick";
  }
