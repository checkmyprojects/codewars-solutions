// https://www.codewars.com/kata/5572f7c346eb58ae9c000047

// Task:
// You have to write a function pattern which returns the following Pattern(See Pattern & Examples) upto n number of rows.

function pattern(n) {
    var res = [], i;
    for(i = 1; i <= n; i++) {
      res.push(Array(i + 1).join(i));
    }
    return res.join('\n');
  }