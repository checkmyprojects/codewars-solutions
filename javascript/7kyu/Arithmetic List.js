// https://www.codewars.com/kata/541da001259d9ca85d000688

// In this kata, you will write an arithmetic list which is basically a list that contains consecutive terms in the sequence.
// You will be given three parameters :

//     first the first term in the sequence
//     c the constant that you are going to ADD ( since it is an arithmetic sequence...)
//     l the number of terms that should be returned

var seqlist = function(first,c,l){
    var result = [];
    for(var i = 0, val = first; i < l; i++, val += c) {
        result.push(val);
    }
    return result;
}