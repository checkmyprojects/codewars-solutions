// You are trying to put a hash in ruby or an object in javascript or java into an array, but it always returns error, solve it and keep it as simple as possible!

// https://www.codewars.com/kata/527b3cd0492b6b15250060af

import java.util.List;
import java.util.ArrayList;

public class PushAnObjectIntoArray {  
  public static List<String> push(){
    List<String> items = new ArrayList<>();
    items.add("an object");
    return items;
  }
}