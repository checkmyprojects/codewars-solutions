// https://www.codewars.com/kata/57078c56924f34f763000b3f

// Define a circular object circular such that the following are true:

// circular.value === "Hello World"
// circular === circular.self
// circular.self === circular.self.self
class Circular {
    constructor() {
      this.value = "Hello World";
      this.self = this;    
    }
  }
  
  circular = new Circular();