// https://www.codewars.com/kata/5893e0c41a88085c330000a0

// Below we will define what and n-interesting polygon is and your task is to find its area for a given n.

// A 1-interesting polygon is just a square with a side of length 1. An n-interesting polygon is obtained by taking the n - 1-interesting polygon and appending 1-interesting polygons to its rim side by side. You can see the 1-, 2- and 3-interesting polygons in the picture below.

function shapeArea(n) {
    return n ** 2 + (n - 1) ** 2;
}