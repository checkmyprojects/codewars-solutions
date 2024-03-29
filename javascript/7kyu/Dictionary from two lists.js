// https://www.codewars.com/kata/5533c2a50c4fea6832000101

// There are two lists, possibly of different lengths. The first one consists of keys, the second one consists of values. Write a function createDict(keys, values) that returns a dictionary created from keys and values. If there are not enough values, the rest of keys should have a None (JS null)value. If there not enough keys, just ignore the rest of values.

function createDict(keys, values) {
    var obj = {}
    
    for (var i = 0; i < keys.length; i++) {
      obj[keys[i]] = i < values.length ? values[i] : null
    }
    
    return obj
}