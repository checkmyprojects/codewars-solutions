// https://www.codewars.com/kata/577b9960df78c19bca00007e

// Complete the function that takes two numbers as input, num and nth and return the nth digit of num (counting from right to left).

var findDigit = function(num, nth){
    if(nth <= 0)
      return -1;
     
    var x = Math.abs(num);
    for (var i=1; i < nth; i++){
      x = Math.floor(x/10);
    }
    return x%10;
}