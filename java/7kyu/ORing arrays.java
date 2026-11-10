// https://www.codewars.com/kata/5ac5e9aa3853da25d9000102

// It started as a discussion with a friend, who didn't fully grasp some way of setting defaults, but I thought the idea was cool enough for a beginner kata: binary OR each matching element of two given sequences of integers and give the resulting ORed array (starts to sound like a tonguetwister, doesn't it?).

// If one array is shorter than the other, use the optional third parameter (defaulted to 0) to OR the unmatched elements.

// For example:

// arr1 = [1,2,3]
// arr2 = [1,2,3] 
// // Should return [1,2,3]

// arr1 = [1,2,3]
// arr2 = [4,5,6] 
// // Should return [5,7,7]

// arr1 = [1,2,3]
// arr2 = [1,2] 
// // Should return [1,2,3]

// arr1 = [1,2]
// arr2 = [1,2,3] 
// // Should return [1,2,3]

// arr1 = [1,2,3]
// arr2 = [1,2,3]
// // with a third parameter = 3
// // Should return [1,2,3]

class OrArrays {
  static int[] orArrays(int[] arr1, int[] arr2) {
    return orArrays(arr1, arr2, 0);
  }

  static int[] orArrays(int[] arr1, int[] arr2, int def) {
    int[] res = arr2.length > arr1.length ? arr2 : arr1;
    for (int i = 0; i < Math.max(arr1.length, arr2.length); i++) {
      if (i < arr1.length && i < arr2.length) {
        res[i] = arr1[i] | arr2[i];
      } else if (i < arr1.length) {
        res[i] = arr1[i] | def;
      } else {
        res[i] = arr2[i] | def;
      }
    }
    return res;
  }
}