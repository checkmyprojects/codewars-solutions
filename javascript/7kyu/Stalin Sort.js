// https://www.codewars.com/kata/699af631058f5c12b04f4efe

// Implement the function stalin_sort / stalinSort, which accepts an array of integers and modifies it in-place, removing all elements that violate the ascending order relative to the previous surviving element.

// All other elements are considered enemies of order and must be eliminated.

function stalinSort(a) {
    let last = -Infinity;
    let i = 0;
  
    while (i < a.length) {
      if (a[i] >= last) {
        last = a[i];
        i++;
      } else {
        a.splice(i,1);
      }
    }
  }