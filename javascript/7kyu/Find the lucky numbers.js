// https://www.codewars.com/kata/580435ab150cca22650001fb

// Write a function filterLucky/filter_lucky() that accepts a list of integers and filters the list to only include the elements that contain the digit 7.

var filterLucky=x=>{
    return x.filter(function(el) {
      if(el.toString().split('').indexOf('7') != -1) {
        return el;
      }
    });
  }