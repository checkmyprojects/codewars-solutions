// https://www.codewars.com/kata/63d33dac08a4830443075c23

const LT = lt => eq => gt => lt ;
const EQ = lt => eq => gt => eq ;
const GT = lt => eq => gt => gt ;

function compare(x,y) {
  if ( x < y )
    return LT;
  else if ( x > y )
    return GT;
  else
    return EQ;
}

function sorted([...xs]) {
  return xs.sort( (a,b) => compare(a,b) (-1) (0) (1) );
}

function maximum(xs) {
  return xs.reduce( (accumulator,currentValue) => compare(accumulator,currentValue) (currentValue) (currentValue) (accumulator) );
}

const UNIT = unit => unit ;

const RED    = r => o => y => g => b => p => r ;
const ORANGE = r => o => y => g => b => p => o ;
const YELLOW = r => o => y => g => b => p => y ;
const GREEN  = r => o => y => g => b => p => g ;
const BLUE   = r => o => y => g => b => p => b ;
const PURPLE = r => o => y => g => b => p => p ;