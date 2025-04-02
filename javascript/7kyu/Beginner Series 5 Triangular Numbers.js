// https://www.codewars.com/kata/56d0a591c6c8b466ca00118b

// Triangular number is any amount of points that can fill an equilateral triangle.

// Example: the number 6 is a triangular number because all sides of a triangle has the same amount of points.

// Given a number T from interval [1..2147483646], find if it is triangular number or not.

function isTriangular(t) {
    for (let i = 1,n = 1;i<=t; n++){
        i = n*(n+1)/2;
        if (i==t) return true
    }
    return false;
}