// https://www.codewars.com/kata/58b972cae826b960a300003e

// Jenny is 9 years old. She is the youngest detective in North America. Jenny is a 3rd grader student, so when a new mission comes up, she gets a code to decipher in a form of a sticker (with numbers) in her math notebook and a comment (a sentence) in her writing notebook. All she needs to do is to figure out one word, from there she already knows what to do. And here comes your role - you can help Jenny find out what the word is!

// In order to find out what the word is, you should use the sticker (array of 3 numbers) to retrive 3 letters from the comment (string) that create the word.

//     Each of the numbers in the array refers to the position of a letter in the string, in increasing order.
//     Spaces are not places, you need the actual letters. No spaces.
//     The returned word should be all lowercase letters.
//     if you can't find one of the letters using the index numbers, return "No mission today". Jenny would be very sad, but that's life... :(

function missingWord(nums, str) {
    var result = "";
    var string = str.split(" ").join("");
    nums.sort((a,b) => a - b);
    nums.forEach(function(x){ 
      if(string[x]){
        result += string[x].toLowerCase();
      }else{
        result = "No mission today";
      }
    });
    return result;
}