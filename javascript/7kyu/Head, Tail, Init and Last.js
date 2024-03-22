// https://www.codewars.com/kata/54592a5052756d5c5d0009c3

function head(array) {
    return array[0];
}
function tail(array) {
    return array.slice(1);
}
function init(array) {
    return array.slice(0, -1);
}
function last(array) {
    return array[array.length-1];
}