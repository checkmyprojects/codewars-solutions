// https://www.codewars.com/kata/560d6ebe7a8c737c52000084

// Imagine there's a big cube consisting of n3 n^3 n3 small cubes. Calculate, how many small cubes are not visible from outside.

// For example, if we have a cube which has 4 cubes in a row, then the function should return 8, because there are 8 cubes inside our cube (2 cubes in each dimension)

function notVisibleCubes(n) {
    return Math.max(0, (n-2)**3);
}