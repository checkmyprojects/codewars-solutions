// https://www.codewars.com/kata/52829c5fe08baf7edc00122b

// Write a function that returns the number of occurrences of an element in an array.

// This function will be defined as a property of Array with the help of the method Object.defineProperty, which allows to define a new method directly on the object (more info about that you can find on MDN).

Object.defineProperty(Array.prototype, 'numberOfOccurrences',{ 
    value : function numberOfOccurrences(element) {
      let res = 0
      
      this.forEach(val => {
        val === element ? res += 1 : res
      })
  
      return res
    }
  });