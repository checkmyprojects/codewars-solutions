// https://www.codewars.com/kata/526c7363236867513f0005ca

// In this kata you should simply determine, whether a given year is a leap year or not. In case you don't know the rules, here they are:

//     Years divisible by 4 are leap years,
//     but years divisible by 100 are not leap years,
//     but years divisible by 400 are leap years.

function isLeapYear(year) {
    return (year % 100 !== 0 && year % 4 === 0) || year % 400 === 0;
}