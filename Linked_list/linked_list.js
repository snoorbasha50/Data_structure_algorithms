// Define Node first
class Node {
    constructor(val) {
      this.val = val;
      this.next = null;
    }
  }
  
  // Then LinkedList uses Node
  class LinkedList {
    constructor() {
      this.head = null;
      this.tail = null;
    }
  
    // push_front(val) {
    //   const newNode = new Node(val);
    //   if()
  
      
    // }
  
    prepend(val) {
      const newNode = new Node(val);
      newNode.next = this.head;
      this.head = newNode;
  
      if (!this.tail) this.tail = newNode;
    }
  
    print() {
      let current = this.head;
      const result = [];
      while (current) {
        result.push(current.val);
        current = current.next;
      }
      console.log(result.join(" -> "));
    }
  }
  
  // Usage:
  const list = new LinkedList();
  list.append(10);
  list.append(20);
  list.prepend(5);
  list.print();  // Output: 5 -> 10 -> 20
  