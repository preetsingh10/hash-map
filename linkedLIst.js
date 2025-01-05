const Node = require("./node");
class LinkedList {
  head = null;
  tail = null;
  size = 0;

  append(key, value) {
    let node = new Node(key, value);

    if (this.head === null) {
      this.head = node;
      this.tail = node;
 
    } else {
      this.tail.next = node;
      this.tail = node;
    }
    this.tail.next = null;
    this.size++;
  }

  toString() {
    let linkedLIst = [];
    let current = this.head; 
    while (current !== null) {
      linkedLIst.push(current.key);
       current = current.next;
    }
    return linkedLIst.join("->");
  }
}

module.exports = LinkedList;
