// https://www.codewars.com/kata/5aee86c5783bb432cd000018

// Welcome to the Codewars Bar!

// Codewars Bar recommends you drink 1 glass of water per standard drink so you're not hungover tomorrow morning.

// Your fellow coders have bought you several drinks tonight in the form of a string. Return a string suggesting how many glasses of water you should drink to not be hungover.

function hydrate(s) {
    let answer = 0;
    for (let i = 0; i < s.length; i++) {
      if (parseInt(s[i]) > 0) {
        answer += +s[i];
      }
    }
    return answer > 1 ? `${answer} glasses of water`: '1 glass of water'
  }