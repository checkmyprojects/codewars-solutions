// https://www.codewars.com/kata/56f935002e6c0d55fa000d92

// Define the following classes that inherit from Animal.
// I. Shark
// II. Cat
// III. Dog

class Shark extends Animal {
    constructor(name, age, status) {
      super(name, age, 0, "shark", status);
    }
  }
  
  class Cat extends Animal {
    constructor(name, age, status) {
      super(name, age, 4, "cat", status);
    }
    introduce() {
      return `${super.introduce()}  Meow meow!`;
    }
  }
  
  class Dog extends Animal {
    constructor(name, age, status, master) {
      super(name, age, 4, "dog", status);
      this.master = master;
    }
    greetMaster() {
      return `Hello ${this.master}`;
    }
  }