// https://www.codewars.com/kata/569924899aa8541eb200003f

// A checksum is an algorithm that scans a packet of data and returns a single number. The idea is that if the packet is changed, the checksum will also change, so checksums are often used for detecting transmission errors, validating document contents, and in many other situations where it is necessary to detect undesirable changes in data.

// For this problem, you will implement a checksum algorithm called Quicksum. A Quicksum packet allows only uppercase letters and spaces. It always begins and ends with an uppercase letter.

// Otherwise, spaces and uppercase letters can occur in any combination, including consecutive spaces.

// A Quicksum is the sum of the products of each character’s position in the packet times the character’s value. A space has a value of zero, while letters have a value equal to their position in the alphabet.

// So, A = 1, B = 2, etc., through Z = 26. Here are example Quicksum calculations for the packets "ACM" and "A C M":

// ACM
// 1 × 1 + 2 × 3 + 3 × 13 = 46 

// A C M
// 1 x 1 + 3 x 3 + 5 * 13 = 75

// When the packet doesn't have only uppercase letters and spaces or just spaces the result to quicksum have to be zero (0).

// AbqTH #5 = 0

function quicksum(packet){
    let abc = [" ", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J","K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
    let acc = 0;
    
    for ( let i = 0; i < packet.length; i++) {
      if (abc.indexOf(packet[i]) != -1) {
        let letterValue = abc.indexOf(packet[i]);
        let mult = letterValue * (i + 1);
        acc += mult;
      } else {
        return 0;
      }
    }
    
    return acc; 
  }