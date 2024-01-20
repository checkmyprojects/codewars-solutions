// https://www.codewars.com/kata/5ba38ba180824a86850000f7

// Remove the duplicates from a list of integers, keeping the last ( rightmost ) occurrence of each element.

function solve(arr){
    var a=[];
    var ar=arr.reverse();
    for (var i=0; i<ar.length; ++i)
      if (a.indexOf(ar[i])==-1)
        a.push(ar[i]);
    return a.reverse();
  }