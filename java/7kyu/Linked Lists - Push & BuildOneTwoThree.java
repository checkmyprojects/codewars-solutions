// https://www.codewars.com/kata/55be95786abade3c71000079

// Linked Lists - Push & BuildOneTwoThree

// Write push() and buildOneTwoThree() functions to easily update and initialize linked lists. Try to use the push() function within your buildOneTwoThree() function.

// Here's an example of push() usage:

// var chained = null
// chained = push(chained, 3)
// chained = push(chained, 2)
// chained = push(chained, 1)
// push(chained, 8) === 8 -> 1 -> 2 -> 3 -> null

class Node {

  int data;
  Node next = null;
  
  Node(final int data) {
    this.data = data;
  }
  
  public static Node push(final Node head, final int data) {
    Node node = new Node(data);
    node.next = head;
    return node;    
  }
  
  public static Node buildOneTwoThree() {
    Node chained = null;
    chained = push(chained, 3);
    chained = push(chained, 2);
    chained = push(chained, 1);
    return chained;
  }
}