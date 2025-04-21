// https://www.codewars.com/kata/572cb264362806af46000793

// Coding in function threeInOne. function accept 1 parameters arr, it's a 1D number array. Your task is to merge each of the 3 elements into 1 elements (sum value) and return the result. 

function threeInOne(arr){
    var result = [];
    for(var i=0;i<arr.length;i+=3) {
        result.push(arr[i] + arr[i+1] + arr[i+2]);
    }
    return result
}