// https://www.codewars.com/kata/5631213916d70a0979000066

// Using n as a parameter in the function pattern, where n>0, complete the codes to get the pattern (take the help of examples):
// Note: There is no newline in the end (after the pattern ends)

function pattern(n){
    if (n < 1) return "";
    var output = "1";
    for (let i = 2; i <= n; ++i) {
      output += "\n1" + Array(i).join("*") + i;
    }
    return output;
  }