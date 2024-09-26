// https://www.codewars.com/kata/57873ab5e55533a2890000c7

// A new task for you!

//     You have to create a method, that corrects a given time string.
//     There was a problem in addition, so many of the time strings are broken.
//     Time is formatted using the 24-hour clock, so from 00:00:00 to 23:59:59.

// Examples

// "09:10:01" -> "09:10:01"  
// "11:70:10" -> "12:10:10"  
// "19:99:99" -> "20:40:39"  
// "24:01:01" -> "00:01:01"  

// If the input-string is null or empty return exactly this value! (empty string for C++) If the time-string-format is invalid, return null. (empty string for C++)

function timeCorrect(timestring) {
    if(!timestring) {
        return timestring;
    };
    
    if (!/\d\d:\d\d:\d\d/.test(timestring)) {
      return null
   }
   arr = timestring.split(':');
   
    if(arr[2] > 59) {
        var least = Math.floor(arr[2] / 60);
        arr[2] = arr[2] % 60;
        arr[1] = 1*arr[1] + least;
    }
    if(arr[1] > 59) {
        least = Math.floor(arr[1] / 60);
        arr[1] = arr[1] % 60;

        arr[0] = 1*arr[0] + least;
        console.log(arr[0]);
    }
    if(arr[0] > 23) {
        arr[0] = arr[0] % 24;

    }
    
    return arr.map(function(item){
        if (item < 10 && (typeof item == 'number')) {
            item = '0' + item;
        }
        return item;
    }).join(':');
}