// https://www.codewars.com/kata/597c684822bc9388f600010f

// The code provided is supposed return a person's Full Name given their first and last names.
// But it's not working properly.
class Dinglemouse{

    constructor( firstName, lastName ){
      this._firstName=firstName;
      this._lastName=lastName;
    }
    
    getFullName(){
      return `${this._firstName} ${this._lastName}`.trim();
    }
    
  }