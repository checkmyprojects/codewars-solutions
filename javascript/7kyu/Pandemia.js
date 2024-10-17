// https://www.codewars.com/kata/5e2596a9ad937f002e510435

// ⚠️ The world is in quarantine! There is a new pandemia that struggles mankind. Each continent is isolated from each other but infected people have spread before the warning. ⚠️

// 🗺️ You would be given a map of the world in a type of string:

// string s = "01000000X000X011X0X"

// '0' : uninfected
// '1' : infected
// 'X' : ocean

function infected(s) {

    if(!(s.includes('0') && s.includes('1'))) return 0;
    
    let str = s.split('X').map(el => el.includes('1') ? el.replace(/0/g, '1') : el).join('');
    
    let total = str.length;
    let infect = str.match(/1/g).length;
    
    return 100 * infect / total;
}