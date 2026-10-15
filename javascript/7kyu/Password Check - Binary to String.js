// https://www.codewars.com/kata/5a731b36e19d14400f000c19

// Convert the binary string to text and check whether the decoded
// password exists in the array of possible passwords.

function decodePass(a,s) {
  const password = String.fromCharCode( ...s.split(" ").map( s => Number.parseInt(s,2) ) );
  return a.includes(password) && password ;
}