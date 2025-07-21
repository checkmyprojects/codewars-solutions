// https://www.codewars.com/kata/5a6d3bd238f80014a2000187

// I have a cat and a dog which I got as kitten / puppy.

// I forget when that was, but I do know their current ages as catYears and dogYears.

// Find how long I have owned each of my pets and return as a list [ownedCat, ownedDog]

public class Dinglemouse {

  public static int[] ownedCatAndDog(final int catYears, final int dogYears) {
    final int ownedCat = catYears < 15 ? 0 : catYears < 24 ? 1 : 2 + (catYears-24)/4;
    final int ownedDog = dogYears < 15 ? 0 : dogYears < 24 ? 1 : 2 + (dogYears-24)/5;
    return new int[]{ownedCat, ownedDog};
  }
  
}