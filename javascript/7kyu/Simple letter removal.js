// https://www.codewars.com/kata/5b728f801db5cec7320000c7

// In this Kata, you will be given a lower case string and your task will be to remove k characters from that string using the following rule:

// - first remove all letter 'a', followed by letter 'b', then 'c', etc...
// - remove the leftmost character first.

// For example: 
// solve('abracadabra', 1) = 'bracadabra' # remove the leftmost 'a'.
// solve('abracadabra', 2) = 'brcadabra'  # remove 2 'a' from the left.
// solve('abracadabra', 6) = 'rcdbr'      # remove 5 'a', remove 1 'b' 
// solve('abracadabra', 8) = 'rdr'
// solve('abracadabra',50) = ''

function solve(s, k){
    const abc = "abcdefghijklmnopqrstuvwxyz"
    
    for (let i=0; i<abc.length; i+=1) {
      while(s.includes(abc[i]) && k > 0) {
        s = s.replace(abc[i], "")
        k -= 1
      }
    }
    
    return s
}