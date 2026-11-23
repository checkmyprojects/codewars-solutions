// https://www.codewars.com/kata/5681bc8d17af37f50e000015

// Your task is to take a given range and return an array of the prime numbers in that range.

// You will write a function with the following parameters:

// start is the integer from which your range starts. (inclusive)

// end is the integer at which your range ends. (inclusive)

// If the range does not contain any prime numbers return an empty value in your language (for example null / None / nil).

// Examples:

// primes(5, 7)  // [5, 7]
// primes(8, 9)  // null
// primes(1, 10) // [2, 3, 5, 7]

const isPrime = n => {
  if (n % 1 || n < 2) return false;
  let m = Math.sqrt(n);
  for (let i = 2; i <= m; i++) if (!(n % i)) return false;
  return true;
}
const primes = (start, end) => {
  let arr = [];
  for (let i = start; i <= end; i++) {
  	if (isPrime(i)) arr.push(i);
  }
  return arr.length ? arr : null;
}