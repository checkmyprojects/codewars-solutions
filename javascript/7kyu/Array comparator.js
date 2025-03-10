// https://www.codewars.com/kata/561046a9f629a8aac000001d

// You have two arrays in this kata, every array contains unique elements only. Your task is to calculate number of elements in the first array which are also present in the second array.

function matchArrays(v,r){
    var i, j, result = 0;
    for (i = 0; i < v.length; i++) {
      for (j = 0; j < r.length; j++) {
        if (v[i] === r[j])
          result++;
      }
    }
    return result;
  }