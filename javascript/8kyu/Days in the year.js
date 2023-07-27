// https://www.codewars.com/kata/56d6c333c9ae3fc32800070f

function yearDays(year) {
    let nDays =  year % 4 ? 365 :
                 year % 100 ? 366:
                 year % 400 ? 365 : 366;
    
    return `${year} has ${nDays} days`;
  }