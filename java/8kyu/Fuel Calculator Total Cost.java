// In this kata you will have to write a function that takes litres and pricePerLitre (in dollar) as arguments.

// Purchases of 2 or more litres get a discount of 5 cents per litre, purchases of 4 or more litres get a discount of 10 cents per litre, and so on every two litres, up to a maximum discount of 25 cents per litre. But total discount per litre cannot be more than 25 cents. Return the total cost rounded to 2 decimal places. Also you can guess that there will not be negative or non-numeric inputs.

// https://www.codewars.com/kata/57b58827d2a31c57720012e8

public class Kata {
  public static double fuelPrice(int litres, double price) {
    return litres * (price - Math.min(litres / 2 * 0.05, 0.25));
  }
}