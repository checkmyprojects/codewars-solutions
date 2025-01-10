// https://www.codewars.com/kata/57ae18c6e298a7a6d5000c7a

// Write function replaceAll (Python: replace_all) that will replace all occurrences of an item with another.

function replaceAll(seq, find, replace) {
    if (typeof seq === 'string') return seq.split('').map(x => x===find ? replace : x).join('');
    return seq.map(x => x===find ? replace : x);
}