// https://www.codewars.com/kata/586ec0b8d098206cce001141

// Write a function inverse_slice that takes three arguments: a list items, an integer a and an integer b. The function should return a new list with the slice specified by items[a:b] excluded.

function inverseSlice(items, a, b) {
    items.splice(a,b-a);
    return items;
}