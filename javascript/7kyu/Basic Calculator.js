// https://www.codewars.com/kata/5296455e4fe0cdf2e000059f

// Write a function called calculate that takes 3 values. The first and third values are numbers. The second value is a character. If the character is "+" , "-", "*", or "/", the function will return the result of the corresponding mathematical function on the two numbers. If the string is not one of the specified characters, the function should return null (throw an ArgumentException in C#).

function calculate(a, o, b) {
    switch(o) {
       case '+':
           return a+b;
       case '-':
           return a-b;
       case '*':
           return a*b;
       case '/':
           return b===0?null:a/b;
       default:
           return null;
   }
}