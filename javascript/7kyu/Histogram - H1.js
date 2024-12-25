// https://www.codewars.com/kata/57d532d2164a67cded0001c7

// You will be passed the dice value frequencies, and your task is to write the code to return a string representing a histogram, so that when it is printed it has the same format as the example.

function histogram(results) {
    var histogram = '';
    
    for (var i=5; i>=0; --i)
      histogram += (i+1) + '|' + '#'.repeat(results[i]) + (results[i] > 0 ? ' ' + results[i] : '') + "\n";
    
    return histogram;
}