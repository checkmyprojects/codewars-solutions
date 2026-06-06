// https://www.codewars.com/kata/63d1ba782de94107abbf85c3

const False = x => _ => x

const True = _ => x => x

const iff = c => t => e => c(e)(t)