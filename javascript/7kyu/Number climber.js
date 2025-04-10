// https://www.codewars.com/kata/559760bae64c31556c00006b

// Write a function that returns this sequence given a number N. Try generating the elements of the resulting list in ascending order, i.e., without resorting to a list reversal or prependig the elements to a list.

function climb(n) {
    var res = [n];
    
    while (n > 1) {
        n = Math.floor(n / 2);
        res.push(n)
    }
    
    return res.reverse();
}