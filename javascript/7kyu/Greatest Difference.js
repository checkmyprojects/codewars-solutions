// https://www.codewars.com/kata/56b12e3ad2387de332000041

// Task: Find the number couple with the greatest difference from a list of number-couples.

// Input: A list of number-couples, where each couple is represented as a string containing two positive integers separated by a hyphen ("-").

// Output: The number couple with the greatest difference, or False if there is no difference among any of the couples or in case of an empty list.

// Additional Information:

//     All number couples will be given as strings.
//     All numbers in the couples are positive integers.
//     If multiple couples have the same greatest difference, return the first one encountered in the input list.
//     If there is no difference (both numbers in a couple are equal), return False.

function diff(str){
  var max=0;
  var ans=''
  for (var i=0; i<str.length; ++i)
  {
    var arr=str[i].split('-');
    if (max<Math.abs(arr[0]-arr[1]))
    {
      max=Math.abs(arr[0]-arr[1])
      ans=str[i];
    }
  }
  return max==0?false:ans;
}