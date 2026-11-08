// https://www.codewars.com/kata/534fcca5edb124cfe6000f60

// In software engineering, the singleton pattern is a design pattern that restricts the instantiation of a class to one object. This is useful when exactly one object is needed to coordinate actions across the system.

// Create a Singleton class, so that there is always a unique instance of Singleton in the session.

// Example:

// const [obj1, obj2] = [new Singleton, new Singleton];
// obj1 instanceof Singleton; // => true
// obj1 === obj2; // => true
// obj1.test = 1;
// obj2.test; // => 1

var Singleton = function(){
  if(Singleton.__instance) {
    return Singleton.__instance;
  }
  
  Singleton.__instance = this;
};