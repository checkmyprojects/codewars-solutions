// https://www.codewars.com/kata/563b662a59afc2b5120000c6

function nbYear(p0, percent, aug, p) {
  let year = 0;
  let population = p0;
  while (population < p) {
		population = Math.floor((1 + percent/100)* population) + aug;
		year++;
  }
  return year;
}