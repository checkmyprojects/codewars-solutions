// https://www.codewars.com/kata/5512e5662b34d88e44000060

// You receive some random elements as a space-delimited string. Check if the elements are part of an ascending sequence of integers starting with 1, with an increment of 1 (e.g. 1, 2, 3, 4).

// Return:

//     0 if the elements can form such a sequence, and no number is missing ("not broken", e.g. "1 2 4 3")
//     1 if there are any non-numeric elements in the input ("invalid", e.g. "1 2 a")
//     n if the elements are part of such a sequence, but some numbers are missing, and n is the lowest of them ("broken", e.g. "1 2 4" or "1 5")

function findMissingNumber(sequence){
    if (!Number.isInteger(+sequence.split(' ').join(''))) return 1;
    var arr = sequence.split(' ').map(n => +n);
    for (i = 1; i < Math.max(...arr); i++) {
      if (!arr.includes(i)) return i;
    }
    return 0;
  }