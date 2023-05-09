// Return true if the number of days passed from last to today is greater than cycleLength. Otherwise, return false.

// https://www.codewars.com/kata/578a8a01e9fd1549e50001f1

function periodIsLate(last, today, cycleLength) {
    return (today-last)/86400000>cycleLength;
}