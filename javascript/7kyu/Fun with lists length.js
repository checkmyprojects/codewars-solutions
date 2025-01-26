// https://www.codewars.com/kata/581e476d5f59408553000a4b

// Implement the method length, which accepts a linked list (head), and returns the length of the list.

function length(head) {
    var currentNode = head;
    for (var i=0;currentNode; ++i) {
        currentNode = currentNode.next
    }
    return i;
}