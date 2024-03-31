// https://www.codewars.com/kata/5768a693a3205e1cc100071f

// Some people just have a first name; some people have first and last names and some people have first, middle and last names.

// You task is to initialize the middle names (if there is any).

function initializeNames(name){
    var arr = name.split(' ');
     for (var i = 1; i < arr.length - 1; i++) 
             arr[i] = arr[i].charAt(0) + '.';
     return arr.join(' ');
}