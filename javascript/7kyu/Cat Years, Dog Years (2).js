// https://www.codewars.com/kata/5a6d3bd238f80014a2000187

// I have a cat and a dog which I got as kitten / puppy.

// I forget when that was, but I do know their current ages as catYears and dogYears.

// Find how long I have owned each of my pets and return as a list [ownedCat, ownedDog]
const ownedCatAndDog = (...pets) => pets.map((petYears, i) => { 
    if (petYears < 15) return 0;
    if (petYears < 24) return 1;

    return 2 + Math.floor((petYears - 24) / (4 + i));
});