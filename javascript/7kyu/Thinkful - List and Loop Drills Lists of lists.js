// https://www.codewars.com/kata/586e1d458cb711f0a800033b

// You have a two-dimensional list in the following format:

// data = [[2, 5], [3, 4], [8, 7]]

// Each sub-list contains two items, and each item in the sub-lists is an integer.

// Write a function process_data()/processData() that processes each sub-list like so:

//     [2, 5] --> 2 - 5 --> -3
//     [3, 4] --> 3 - 4 --> -1
//     [8, 7] --> 8 - 7 --> 1

// and then returns the product of all the processed sub-lists: -3 * -1 * 1 --> 3.

function processData(data){
    return data.reduce((acc, cur) => acc * (cur[0] - cur[1]), 1)      
}