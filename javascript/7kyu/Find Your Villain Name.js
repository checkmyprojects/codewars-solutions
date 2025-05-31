// https://www.codewars.com/kata/536c00e21da4dc0a0700128b

// Create a function that returns a villain name based on the user's birthday. The birthday will be passed to the function as a valid Date object, so for simplicity, there's no need to worry about converting strings to dates.

// The first name will come from the month, and the last name will come from the last digit of the date

function getVillainName(birthday){
    firstNames = ["The Evil", "The Vile", "The Cruel", "The Trashy", "The Despicable", "The Embarrassing", "The Disreputable", "The Atrocious", "The Twirling", "The Orange", "The Terrifying", "The Awkward"];
    lastNames = ["Mustache", "Pickle", "Hood Ornament", "Raisin", "Recycling Bin", "Potato", "Tomato", "House Cat", "Teaspoon", "Laundry Basket"];
    return firstNames[birthday.getMonth()] + ' ' + lastNames[birthday.getDate() % 10]
}