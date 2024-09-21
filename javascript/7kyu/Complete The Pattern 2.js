// https://www.codewars.com/kata/55733d3ef7c43f8b0700007c

// You have to write a function pattern which returns the following Pattern (See Pattern & Examples) upto n number of rows.

function pattern(n) {
    if (n < 1) return ''
    var lines = []
    for (var i = 0; i < n; i++) {
      var line = ''
      for (var j = n; j > i; j--) {
        line += j
      }
      lines.push(line)
    }
    return lines.join('\n')
  }