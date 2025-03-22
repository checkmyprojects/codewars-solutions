// https://www.codewars.com/kata/55c7f90ac8025ebee1000062

var sortArray = function(value) {
    return value.split('').sort((c, p) => c - p ).join('');
}