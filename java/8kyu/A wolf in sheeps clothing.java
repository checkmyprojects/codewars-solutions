// Wolves have been reintroduced to Great Britain. You are a sheep farmer, and are now plagued by wolves which pretend to be sheep. Fortunately, you are good at spotting them.

// Warn the sheep in front of the wolf that it is about to be eaten. Remember that you are standing at the front of the queue which is at the end of the array:

// [sheep, sheep, sheep, sheep, sheep, wolf, sheep, sheep]      (YOU ARE HERE AT THE FRONT OF THE QUEUE)
//    7      6      5      4      3            2      1

// If the wolf is the closest animal to you, return "Pls go away and stop eating my sheep". Otherwise, return "Oi! Sheep number N! You are about to be eaten by a wolf!" where N is the sheep's position in the queue.

// https://www.codewars.com/kata/5c8bfa44b9d1192e1ebd3d15

public class ZywOo {

  public static String warnTheSheep(String[] array) {

    // Wolf case
    if (array[array.length -1].equals("wolf"))
      return "Pls go away and stop eating my sheep";
  
    // Sheep case
    int place = 1;
    while (!array[array.length - place - 1].equals("wolf")) {
      place++;
    }

    return "Oi! Sheep number " + place + "! You are about to be eaten by a wolf!";
   }

}