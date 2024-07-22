// https://www.codewars.com/kata/56ed20a2c4e5d69155000301

// You are given a string of n lines, each substring being n characters long.
// Write function scale(strng, k, v) k and v will be positive integers. If strng == "" return "".

const scale = (strng, h, v) => {
    return (strng + '\n')
      .replace(/[^\n]/g, '$&'.repeat(h))
      .replace(/([^\n]+\n)/g, '$&'.repeat(v))
      .trim();
  };