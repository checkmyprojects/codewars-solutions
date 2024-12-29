// https://www.codewars.com/kata/57eb936de1051801d500008a

// You are given an initial 2-value array (x). You will use this to calculate a score.

// If both values in (x) are numbers, the score is the sum of the two. If only one is a number, the score is that number. If neither is a number, return 'Void!'.

// Once you have your score, you must return an array of arrays. Each sub array will be the same as (x) and the number of sub arrays should be equal to the score.

function explode(x){
    let [a,b] = x;
    
    if(typeof a == "number" && typeof b == "number") return new Array(a+b).fill(x);
    else if(typeof a == "number") return new Array(a).fill(x);
    else if(typeof b == "number") return new Array(b).fill(x);
    
    return 'Void!';
}