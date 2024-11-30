// https://www.codewars.com/kata/57faefc42b531482d5000123

// Remove all exclamation marks from sentence except at the end.

function remove(s){
    return s.replace(/!+([^!])/g, '$1')
}