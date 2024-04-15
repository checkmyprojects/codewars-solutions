// https://www.codewars.com/kata/5700c9acc1555755be00027e

// Input:

//     a string strng
//     an array of strings arr

// Output of function contain_all_rots(strng, arr) (or containAllRots or contain-all-rots):

//     a boolean true if all rotations of strng are included in arr
//     false otherwise

function containAllRots(strng, arr) {
    function rotate(s) {
       return s.substring(1) + s[0];  
    }
    for(var i = 0, l = strng.length; i < l; ++i) {
        if (arr.indexOf(strng) === -1) {
            return false;
        }
        strng = rotate(strng);
    }
    return true;
}