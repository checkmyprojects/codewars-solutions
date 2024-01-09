// https://www.codewars.com/kata/580878d5d27b84b64c000b51

// Your task is to return the sum of Triangular Numbers up-to-and-including the nth Triangular Number.

function sumTriangularNumbers(n) {
    var sum = 0;  
    for(var i = 1; i <= n; i++) {
        sum += (i*(i+1))/2;
    }
    return sum;
}