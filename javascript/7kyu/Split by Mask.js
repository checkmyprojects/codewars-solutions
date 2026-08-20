// https://www.codewars.com/kata/6a68ed7894f29599a1f7a248

// Given a xs and a mask (a list of lengths), split the string into its parts accordingly.
// Examples:

// |     xs        |  Mask (lengths) |          Output           |
// |---------------|-----------------|---------------------------|
// |  "1234567890" |  [3, 3, 4]      |  ["123", "456", "7890"]   |
// |  "codewars"   |  [4, 4]         |  ["code", "wars"]         |

// Notes:

//     The mask only contains strictly positive integers.
//     A mask is valid if and only if the sum of the lengths is equal to the length of the string.
//     Otherwise, return None.

function split(string, mask) {
    const totalLength = mask.reduce((sum, length) => sum + length, 0);
  
    if (totalLength !== string.length) {
      return null;
    }
  
    const parts = [];
    let start = 0;
  
    for (const length of mask) {
      parts.push(string.slice(start, start + length));
      start += length;
    }
  
    return parts;
  }