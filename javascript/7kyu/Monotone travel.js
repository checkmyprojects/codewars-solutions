// https://www.codewars.com/kata/54466996990c921f90000d61

// You're given a list of compareable elements:

// Ord a => [a]

// Your job is to check whether for any x all successors are greater or equal to x.

// isMonotone [1,2,3] == True
// isMonotone [1,1,2] == True
// isMonotone [1]     == True
// isMonotone [3,2,2] == False

// If the list is empty, Peter has probably removed your altimeter, so we cannot prove him wrong and he's still right:

// isMonotone []      == True

var isMonotone = function(arr){
    for(var i=0;i<arr.length-1;i++) {
      if(arr[i] > arr[i+1] ) return false;
    }
    return true;
}