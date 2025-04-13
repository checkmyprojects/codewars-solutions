// https://www.codewars.com/kata/594093784aafb857f0000122

// Find the difference between two collections. The difference means that either the character is present in one collection or it is present in other, but not in both. Return a sorted list with the difference.

// The collections can contain any character and can contain duplicates.

function diff(a, b){
    const sortA =  a.filter(sum => !b.includes(sum));
    const sortB=  b.filter(sum => !a.includes(sum));
    return [...new Set(sortA.concat(sortB).sort())];
}