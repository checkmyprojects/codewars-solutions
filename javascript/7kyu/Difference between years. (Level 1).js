// https://www.codewars.com/kata/588f5a38ec641b411200005b

// Write a function that receives two strings as parameter. This strings are in the following format of date: YYYY/MM/DD. Your job is: Take the years and calculate the difference between them.

var howManyYears = function(date1, date2){
    date1 = parseInt(date1.slice(0,4));
    date2 = parseInt(date2.slice(0,4));
    return Math.abs(date1 - date2);
}