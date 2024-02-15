// https://www.codewars.com/kata/58287977ef8d4451f90001a0

// You will be given an array of objects (associative arrays in PHP, tables in COBOL) representing data about developers who have signed up to attend the next coding meetup that you are organising.

function isSameLanguage(list) {
    return list.every(e => e.language === list[0].language);
}