// Given an array of Boolean values and a logical operator, return a Boolean result based on sequentially applying the operator to the values in the array.

// https://www.codewars.com/kata/57096af70dad013aa200007b

function logicalCalc(array, op){
    switch(op){
    case 'AND':return array.every(Boolean);
    case 'OR':return array.some(Boolean);
    case 'XOR':return Boolean(array.filter(Boolean).length&1);
    }
}