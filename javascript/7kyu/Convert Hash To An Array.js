// https://www.codewars.com/kata/59557b2a6e595316ab000046

// Convert a hash into an array. Nothing more, Nothing less.
// {name: 'Jeremy', age: 24, role: 'Software Engineer'}

// should be converted into
// [["age", 24], ["name", "Jeremy"], ["role", "Software Engineer"]]

function convertHashToArray(hash){
    let result = [];
    Object.keys(hash).sort().map(item => result.push([item,hash[item]]));
    return result;
}