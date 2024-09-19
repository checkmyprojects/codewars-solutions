// https://www.codewars.com/kata/583af10620dda4da270000c5

// Write a function that combines two arrays by alternatingly taking elements from each array in turn.

function mergeArrays(a, b) {
    var returnArray = [];
    var counter = 0;
    while (a[counter] || b[counter] ){
        if (a[counter]) {
            returnArray.push(a[counter]);
        }
        if (b[counter]) {
            returnArray.push(b[counter]);
        }
        counter++;
    }
    return returnArray;
}