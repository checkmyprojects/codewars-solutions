// https://www.codewars.com/kata/596c55fc7bd5476bf60000d5

public class Dinglemouse {

  private static int ONE_HUNDRED = 100;
  
  public static final Dinglemouse INST = new Dinglemouse();

  private final int value; 

  private Dinglemouse() {
    value = ONE_HUNDRED;
  }
  
  public int plus100(int n) {
    return value + n;
  }
  
}