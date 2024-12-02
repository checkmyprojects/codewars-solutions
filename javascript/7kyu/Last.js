// https://www.codewars.com/kata/541629460b198da04e000bb9

// Find the last element of the given argument(s). If a single argument is passed and is a list/array or a string, return its last element. It is guaranteed that there will be at least one argument and that single-argument arrays/lists/strings will not be empty.
// Examples

// last(Arrays.asList(1, 2, 3, 4)); // =>  4
// last("xyz");                     // => "z"
// last(1, 2, 3, 4);                // =>  4
// last(new int[]{1, 2, 3, 4});     // =>  4

function last(list) {
    if (arguments.length > 1) {
      return arguments[arguments.length - 1];
    }
    if (Array.isArray(list)) {
      return list.pop();
    } else if (typeof list == 'string') {
      return list.charAt(list.length - 1)
    } else {
      return list;
    }
  }