// https://www.codewars.com/kata/571b6a4a7beb0a8ade0007a8

function bloodAlcoholContent(drinks, weight, sex, time){

	if (sex == "female") {
		r = 0.66;
	} else {
		r = 0.73;
	}
  	bac = ((drinks.ounces * drinks.abv) * 5.14 / weight * r) - 0.015 * time ;
    return Number(bac.toFixed(4));
}