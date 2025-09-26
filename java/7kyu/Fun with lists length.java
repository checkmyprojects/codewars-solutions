// https://www.codewars.com/kata/581e476d5f59408553000a4b

// Implement the method length, which accepts a linked list (head), and returns the length of the list.

class Solution {
  static int length(Node head) {
    if(head == null) return 0;
    return length(head.next) + 1;
  }
}