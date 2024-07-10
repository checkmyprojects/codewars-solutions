// https://www.codewars.com/kata/6071ef9cbe6ec400228d9531

// You'll have to return a string that contains dots, as many the equation returns. If the result is 0, return the empty string. When it comes to subtraction, the first number will always be greater than or equal to the second number.

function dotCalculator (equation) {
    const arr = equation.split(' ');
    switch ( arr[1] ){
        case '+':
        return '.'.repeat( arr[0].length + arr[2].length )
        case '-':
        return '.'.repeat( arr[0].length - arr[2].length )
        case '*':
        return '.'.repeat( arr[0].length * arr[2].length )
        default:
        return '.'.repeat( arr[0].length / arr[2].length )
    }
}