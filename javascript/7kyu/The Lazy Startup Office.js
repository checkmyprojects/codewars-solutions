// https://www.codewars.com/kata/578fdcfc75ffd1112c0001a1

// Create a function binRota that accepts a 2D array of names. The function will return a single array containing staff names in the order that they should empty the bin. 

function binRota(arr) {
    return arr.reduce(function(a, b, index) {
        return (index % 2 === 0) ? a.concat(b) : a.concat(b.reverse());
    });
}