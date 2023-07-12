// https://www.codewars.com/kata/568dc014440f03b13900001d

// L1: Bartender, drinks!

function getDrinkByProfession(param) {
    let toLower = param.toLowerCase();
    let myArr = ["Patron Tequila", "Anything with Alcohol", "Hipster Craft Beer", "Moonshine", "Your tax dollars", "Cristal", "Beer"];
    if (toLower == "jabroni") {
        return myArr[0];
    } else if (toLower == "school counselor") {
        return myArr[1];
    } else if (toLower == "programmer") {
        return myArr[2];
    } else if (toLower == "bike gang member") {
        return myArr[3];
    } else if (toLower == "politician") {
        return myArr[4];
    } else if (toLower == "rapper") {
        return myArr[5];
    } else {
        return "Beer";
    }
}