// https://www.codewars.com/kata/5a662a02e626c54e87000123

// Extra perfect number is the number that first and last bits are set bits.

// Given a positive integer N , Return the extra perfect numbers in range from 1 to N .

function extraPerfect(n){
    result=[];
    for (i=1;i<=n;i=i+2) {
        result.push(i);
    }
    return result;
}