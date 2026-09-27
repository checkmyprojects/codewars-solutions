// https://www.codewars.com/kata/61c78b57ee4be50035d28d42

// This kata requires you to write a function which merges two strings together. It does so by merging the end of the first string with the start of the second string together when they are an exact match.

// "abcde" + "cdefgh" => "abcdefgh"
// "abaab" + "aabab" => "abaabab"
// "abc" + "def" => "abcdef"
// "abc" + "abc" => "abc"

// NOTE: The algorithm should always use the longest possible overlap.

// "abaabaab" + "aabaabab" would be "abaabaabab" and not "abaabaabaabab"

function mergeStrings(first, second){
    let count = 0;
    
    for (let i = 0; i < first.length; i++) {
        if (first[i] == second[count]) {
            count++;
        } else {
            count = 0;
            if (first[i] == second[count]) count++;
        }
    }

    return first + second.slice(count);
}