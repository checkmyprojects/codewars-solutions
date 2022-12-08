// I have a cat and a dog.

// I got them at the same time as kitten/puppy. That was humanYears years ago.

// Return their respective ages now as [humanYears,catYears,dogYears]

// https://www.codewars.com/kata/5a6663e9fd56cb5ab800008b

public class Dinglemouse {

  public static int[] humanYearsCatYearsDogYears(final int humanYears) {
     int catYears =0, dogYears = 0;
        switch (humanYears) {
            default:
                catYears = 4 * (humanYears - 2);
                dogYears = 5 * (humanYears - 2);
            case 2:
                catYears += 9;
                dogYears += 9;
            case 1:
                catYears += 15;
                dogYears += 15;
        }
    return new int[]{humanYears, catYears, dogYears};
  }

}