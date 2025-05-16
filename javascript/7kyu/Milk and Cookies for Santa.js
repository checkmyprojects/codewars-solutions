// https://www.codewars.com/kata/52af7bf41f5a1291a6000025

// Happy Holidays fellow Code Warriors!

// It's almost Christmas Eve, so we need to prepare some milk and cookies for Santa! Wait... when exactly do we need to do that?
// Time for Milk and Cookies

// Complete the function function that accepts a Date object, and returns true if it's Christmas Eve (December 24th), false otherwise.

// Keep in mind Javascript's Date month is 0 based!

function timeForMilkAndCookies(date){
    var day = date.getDate();
    var month = date.getMonth();

    if(day === 24 && month === 11) return true;
    else return false;
}