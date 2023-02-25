// Color Ghost

// Create a class Ghost

// Ghost objects are instantiated without any arguments.

// Ghost objects are given a random color attribute of "white" or "yellow" or "purple" or "red" when instantiated

// ghost = new Ghost();
// ghost.color //=> "white" or "yellow" or "purple" or "red"

// https://www.codewars.com/kata/53f1015fa9fe02cbda00111a

public class Ghost {
  private final String[] colors = {"white", "yellow", "purple", "red"}; 
  
  public Ghost() {
  }
  
  public String getColor() {
    return colors[(int)(Math.random() * colors.length)];
  }
}