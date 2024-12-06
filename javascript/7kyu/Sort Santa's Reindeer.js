// https://www.codewars.com/kata/52ab60b122e82a6375000bad

// Happy Holidays fellow Code Warriors!

// Now, Dasher! Now, Dancer! Now, Prancer, and Vixen! On, Comet! On, Cupid! On, Donder and Blitzen! That's the order Santa wanted his reindeer...right? What do you mean he wants them in order by their last names!? Looks like we need your help Code Warrior!
// Sort Santa's Reindeer

// Write a function that accepts a sequence of Reindeer names, and returns a sequence with the Reindeer names sorted by their last names.
// Notes:

//     It's guaranteed that each string is composed of two words, separated by a single space
//     In case of two identical last names, keep the original order

function sortReindeer(reindeerNames) {
    return reindeerNames.sort((a, b) => 
      a.split(' ')[1] > b.split(' ')[1] ? 1 :
      a.split(' ')[1] < b.split(' ')[1] ? -1 : 0
    )
  }