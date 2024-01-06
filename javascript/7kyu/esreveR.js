// https://www.codewars.com/kata/5413759479ba273f8100003d

// Write a function reverse which reverses a list (or in clojure's case, any list-like data structure)

var reverse = function(array) {
    let newarray = [];
    for (i in array){
        newarray.unshift(array[i]);
    }
    return newarray
}