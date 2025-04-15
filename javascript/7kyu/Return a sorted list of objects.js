// https://www.codewars.com/kata/52705ed65de62b733f000064

// You'll be passed an array of objects (list) - you must sort them in descending order based on the value of the specified property (sortBy). 

function sortList (sortBy, list) {
    return list.sort(function(a, b){
        return a[sortBy] < b[sortBy];  
    })
}