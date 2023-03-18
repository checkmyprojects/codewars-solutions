// https://www.codewars.com/kata/5803956ddb07c5c74200144e

function datingRange(age){
    return `${min(age)}-${max(age)}`;
    
    function min(age) {
      return Math.floor(age > 14 ? (age / 2) + 7 : age - 0.10 * age);
    }
    
    function max(age) {
      return Math.floor(age > 14 ? (age - 7) * 2 : age + 0.10 * age);
    }
  }