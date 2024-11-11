// https://www.codewars.com/kata/55be95786abade3c71000079

// Linked Lists - Push & BuildOneTwoThree

// Write push() and buildOneTwoThree() functions to easily update and initialize linked lists. Try to use the push() function within your buildOneTwoThree() function.

// Here's an example of push() usage:

// var chained = null
// chained = push(chained, 3)
// chained = push(chained, 2)
// chained = push(chained, 1)
// push(chained, 8) === 8 -> 1 -> 2 -> 3 -> null

  function push(head, data) {
    return new Node(data, head);
  }
  
  function buildOneTwoThree() {
    return [3, 2, 1].reduce( (head, data) => push(head, data), null );
  }
  
  function Node(data, next = null) {
    this.data = data;
    this.next = next;
  }