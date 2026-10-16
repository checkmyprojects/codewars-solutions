// Given an integer, if the length of its digits is a perfect square,
// return the digits arranged as a square block.
// Otherwise return "Not a perfect square!".

function squareIt(int) {
  const str = int.toString();
	const r = Math.sqrt(str.length);
  return Number.isInteger(r) ? str.replace(RegExp(`(.{${r}})(?!$)`, "g"), "$1\n") : "Not a perfect square!";
}