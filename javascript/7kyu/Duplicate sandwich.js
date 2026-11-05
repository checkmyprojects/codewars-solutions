// https://www.codewars.com/kata/5f8a15c06dbd530016be0c19

// Task

// In this kata you will be given a list consisting of unique elements except for one thing that appears twice.

// Your task is to output a list of everything inbetween both occurrences of this element in the list.
// Examples:

// [0, 1, 2, 3, 4, 5, 6, 1, 7, 8] => [2, 3, 4, 5, 6]
// ["None", "Hello", "Example", "hello", "None", "Extra"] => ["Hello", "Example", "hello"]
// [0, 0] => []
// [true, false, true] => [false]
// "example" => "xampl"

// Notes

//     All elements will be the same datatype.

//     All used elements will be primitive.

function duplicateSandwich(a) {
    for(let i = 0; i < a.length - 1; i++) {
        if(a.indexOf(a[i]) !== a.lastIndexOf(a[i])) {
            return a.slice(a.indexOf(a[i]) + 1, a.lastIndexOf(a[i]));
        }
    }
}