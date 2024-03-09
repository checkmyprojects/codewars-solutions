// https://www.codewars.com/kata/56a4872cbb65f3a610000026

// Write function max_rot(n) which given a positive integer n returns the maximum number you got doing rotations similar to the above example.
// So max_rot (or maxRot or ... depending on the language) is such as:
//     max_rot(56789) should return 68957
//     max_rot(38458215) should return 85821534

function maxRot(n) {
    var str = n.toString();
    var arr = [str];
    for (var i=0;i<=str.length-1 ;i++){
        str = str.slice(0,i)+str.slice(i+1)+str[i];
        arr.push(str.split().join());
    }
    return Math.max.apply(null, arr);
}