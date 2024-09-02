// https://www.codewars.com/kata/567de72e8b3621b3c300000b

// Complete the code which should return true if the given object is a single ASCII letter (lower or upper case), false otherwise.

String.prototype.isLetter = function() {
    return this.length === 1 && /[a-z]/i.test(this);
}