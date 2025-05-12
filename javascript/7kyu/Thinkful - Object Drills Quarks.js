// https://www.codewars.com/kata/5882b052bdeafec15e0000e6

// Your Quark class should allow you to create quarks of any valid color ("red", "blue", and "green") and any valid flavor ('up', 'down', 'strange', 'charm', 'top', and 'bottom').

// Every quark has the same baryon_number (BaryonNumber in C#): 1/3.

// Every quark should have an .interact() (.Interact() in C#) method that allows any quark to interact with another quark via the strong force. When two quarks interact they exchange colors.

class Quark {
    constructor(color, flavor) {
      Object.assign(this, {color, flavor, baryon_number: 1 / 3});
    }
  
    interact(quark) {
      [this.color, quark.color] = [quark.color, this.color];
    }
  }