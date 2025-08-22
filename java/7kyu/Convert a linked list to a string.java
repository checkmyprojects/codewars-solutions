// https://www.codewars.com/kata/582c297e56373f0426000098

// Task

// Create a function stringify which accepts an argument list / $list and returns a string representation of the list. The string representation of the list starts with the value of the current Node, specified by its data / $data / Data property, followed by a whitespace character, an arrow and another whitespace character (" -> "), followed by the rest of the list. The end of the string representation of a list must always end with null / NULL / None / nil / nullptr / null() ( all caps or all lowercase depending on the language you are undertaking this Kata in ). For example, given the following list:

// new Node(1, new Node(2, new Node(3)))

public class Kata {

  public static String stringify(Node list) {
      StringBuilder sb = new StringBuilder();
      Node next = list;
      while(next!=null){
        sb.append(next.getData());
        sb.append(" -> ");
        next = next.getNext();
      }
      sb.append("null");
      return sb.toString();
  }
}