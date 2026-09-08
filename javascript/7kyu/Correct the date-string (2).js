// https://www.codewars.com/kata/5787628de55533d8ce000b84

// A very easy task for you!

// You have to create a method, that corrects a given date string. There was a problem in addition, so many of the date strings are broken. Date-Format is european. That means "DD.MM.YYYY".

// Some examples:

// "30.02.2016" -> "01.03.2016"
// "40.06.2015" -> "10.07.2015"
// "11.13.2014" -> "11.01.2015"
// "99.11.2010" -> "07.02.2011"

// If the input-string is null or empty return exactly this value!
// If the date-string-format is invalid, return null.

// Hint: Correct first the month and then the day!

// Have fun coding it and please don't forget to vote and rank this kata! :-)

// I have created other katas. Have a look if you like coding and challenges.

function dateCorrect(datestring) {
    if(!datestring) return datestring;
    if(!/^([0-9]{2}\.){2}[0-9]{4}$/.test(datestring)) return null;
    let correctDate = new Date(datestring.slice(-4),datestring.slice(3,5)-1,datestring.slice(0,2)).toLocaleDateString().split('/');
    return [correctDate[1],correctDate[0],correctDate[2]].map(e => e.padStart(2,'0')).join('.');
}