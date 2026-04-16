// https://www.codewars.com/kata/5b18e9e06aefb52e1d0001e9

// stations is a list/array of distances (miles) from one station to the next along the Pony Express route.
// Implement the riders method/function, to return how many riders are necessary to get the mail from one end to the other.

public class Dinglemouse {

  public static int riders(final int[] stations) {
    int rider = 1, miles = 0;
    for (int distToNextStation : stations) {
      if (miles + distToNextStation > 100) {
        rider++;
        miles = 0;
      } 
      miles += distToNextStation;
    }
    return rider;
  }

}