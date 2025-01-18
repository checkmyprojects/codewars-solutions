// https://www.codewars.com/kata/5b047875de4c7f9af800011b

// The input will be an array of dictionaries.

// Return the values as a string-seperated sentence in the order of their keys' integer equivalent (increasing order).

// The keys are not reoccurring and their range is -999 < key < 999. The dictionaries' keys & values will always be strings and will always not be empty.

const sentence = list =>
  list
    .sort((a, b) => Object.keys(a)[0] - Object.keys(b)[0])
    .map(item => Object.values(item)[0])
    .join(' ')