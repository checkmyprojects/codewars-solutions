// https://www.codewars.com/kata/57277a31e5e51450a4000010

function firstToLast(str,c){
    var first = str.indexOf(c), last = str.lastIndexOf(c);
    return first == -1 ? -1 : last - first;
}