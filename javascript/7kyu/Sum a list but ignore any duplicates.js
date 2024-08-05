// https://www.codewars.com/kata/5993fb6c4f5d9f770c0000f2

// Please write a function that sums a list, but ignores any duplicated items in the list.

// For instance, for the list [3, 4, 3, 6] the function should return 10,
// and for the list [1, 10, 3, 10, 10] the function should return 4.

function sumNoDuplicates(arr) {
    let uniqueArr = [];
    let sum = 0;
    arr.forEach(num => {
        if (arr.indexOf(num) === arr.lastIndexOf(num)) {
            uniqueArr.push(num);
            sum += num;
        }
    });
    return sum;
}