// https://www.codewars.com/kata/583989556754d6f4c700018e

// Print all numbers up to 3rd parameter which are multiple of both 1st and 2nd parameter.

// Python, Javascript, Java, Ruby versions: return results in a list/array

// NOTICE:

//     Do NOT worry about checking zeros or negative values.
//     To find out if 3rd parameter (the upper limit) is inclusive or not, check the tests, it differs in each translation

function multiples(s1, s2, s3) {
    let res = [];
    for (let i = s1; i < s3; i += s1)
      if (i % s2 === 0)
        res.push(i)
    return res;
  }