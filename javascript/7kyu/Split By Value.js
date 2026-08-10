// https://www.codewars.com/kata/5a433c7a8f27f23bb00000dc

// For an integer k rearrange all the elements of the given array in such way, that:

// all elements that are less than k are placed before elements that are not less than k;
// all elements that are less than k remain in the same order with respect to each other;
// all elements that are not less than k remain in the same order with respect to each other.

// For k = 6 and elements = [6, 4, 10, 10, 6], the output should be splitByValue(k, elements) = [4, 6, 10, 10, 6].

// For k = 5 and elements = [1, 3, 5, 7, 6, 4, 2], the output should be splitByValue(k, elements) = [1, 3, 4, 2, 5, 7, 6].

function splitByValue(k, elements){
    array1 = []
    array2 = []
    
    elements.map((number) => {
      number < k ? array1.push(number) : array2.push(number)
    })
    
    return array1.concat(array2)
  
  }