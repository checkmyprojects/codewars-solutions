// https://www.codewars.com/kata/57256064856584bc47000611

function howManySmaller(arr,n){
    return arr.filter(x => +x.toFixed(2) < n).length;
}