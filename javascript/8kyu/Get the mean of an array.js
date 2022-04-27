// It's the academic year's end, fateful moment of your school report. The averages must be calculated. All the students come to you and entreat you to calculate their average for them. Easy ! You just need to write a script.

// Return the average of the given array rounded down to its nearest integer.

// The array will never be empty.

// https://www.codewars.com/kata/563e320cee5dddcf77000158

function getAverage(marks){
    //TODO : calculate the downward rounded average of the marks array
    let sum = marks.reduce((counter, curr) => counter + curr, 0)
    sum = sum/marks.length;
    return Math.floor(sum);
}
