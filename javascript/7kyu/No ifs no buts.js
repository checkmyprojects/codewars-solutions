// https://www.codewars.com/kata/592915cc1fad49252f000006

// Write a function that accepts two numbers a and b and returns whether a is smaller than, bigger than, or equal to b, as a string.

var noIfsNoButs = function (a,b) {
    switch (true) {
        case (a <   b) : return a + " is smaller than " + b;
        case (a >   b) : return a + " is greater than " + b;
        default        : return a + " is equal to "     + b;
    }
}