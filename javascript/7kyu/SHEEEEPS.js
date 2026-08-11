// https://www.codewars.com/kata/6912508732aab96c59c09c7d

// HI! You have the array of sheeps:

// ['sheep', 'sheep', 'sheep', 'sheep'...]

// But somebody is "sick":

// ['shpee', 'sheep', 'hspee', 'sheep', 'pehes'...]

// You can help them:

// shpee => sheep

// pehes => sheep

// Because shpee and pehes have 1 s, 1 h, 2 e, 1 p.

// shep !=> sheep

// And:

// sheeep !=> sheep

// return array(list) with "sheep". if you can't help - delete.
// Hard register!!!

// A!==a
// Example:

// ShEep !=> sheep

// EXAMPLE:
// ['sheep', 'Shpee', 'pEhEs', 'PPh', 'heep', 'phees']

// return:
// ['sheep', 'sheep']

function reloadSheeps(arr) {
    const sheepLetters = 'eehps';
  
    return arr
      .filter(word => word.split('').sort().join('') === sheepLetters)
      .map(() => 'sheep');
  }