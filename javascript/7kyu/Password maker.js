// https://www.codewars.com/kata/5637b03c6be7e01d99000046

// One suggestion to build a satisfactory password is to start with a memorable phrase or sentence and make a password by extracting the first letter of each word.

// Even better is to replace some of those letters with numbers (e.g., the letter O can be replaced with the number 0):

//     instead of including i or I put the number 1 in the password;
//     instead of including o or O put the number 0 in the password;
//     instead of including s or S put the number 5 in the password.

function makePassword(phrase) {
    return phrase
      .split(' ')
      .map(s => s[0])
      .join('')
      .replace(/i/ig, '1')
      .replace(/o/ig, '0')
      .replace(/s/ig, '5');
  }