const LinkedList = require("./linkedLIst");
class HashMap {
  size = 0
  loadFactorThreshold = 0.75
  capacity = 16;
  outputArray = new Array(this.capacity).fill(null);

  hash(key) {
    let hashCode = 0;

    const primeNumber = 31;
    for (let i = 0; i < key.length; i++) {
      hashCode = primeNumber * hashCode + key.charCodeAt(i);
    }

    return Math.abs(hashCode % this.capacity);
  }
  set(key, value) {
    let index = this.hash(key);

    if (this.outputArray[index] === null) {
      this.outputArray[index] = new LinkedList();
      this.outputArray[index].append(key, value);
    } else {
      // chechking if key is same, then update the value
      if (this.outputArray[index].tail.key === key) {
        this.outputArray[index].tail.value = value;
      } else {
        this.outputArray[index].append(key, value);
      }
    }

    this.size++
    if(this.size/this.capacity > this.loadFactorThreshold){
      this.resize()
    }
  }

  get(key) {
    const index = this.hash(key);
    if (this.outputArray[index] === null) return undefined;

    let current = this.outputArray[index].head;
    while (current !== null) {
      if (current.key === key) {
        return current.value; // Return the value if the key matches
      }
      current = current.next;
    }
    return undefined; // Key not found
  }
  has(key) {
    const index = this.hash(key);
    if (this.outputArray[index] === null) {
      return false;
    }
    if (this.outputArray[index].head.key === key) {
      return true;
    } else {
      let headNode = this.outputArray[index].head;
      while (headNode !== null) {
        if (headNode.key === key) {
          return true;
        }
        headNode = headNode.next;
      }
      return false;
    }
  }
  remove(key) {
    let index = this.hash(key);
    let bucket = this.outputArray[index];

    if (bucket === null) {
      return false;
    }
    // if only one node is present in the bucket then bucket = null
    if (bucket.head === bucket.tail && bucket.head.key === key) {
      this.outputArray[index] = null;
      this.size--
      return true;
    }
    // check if head node is the selected node
    if (bucket.head.key === key) {
      bucket.head = bucket.head.next;
      this.size--
      return true;
    }
    // if more then one node then needs to traverse the linked list
    let current = bucket.head;

    while (current.next !== null) {
      if (current.next.key === key) {
        //check if node being removed is the tail
        if (current.next === bucket.tail) {
          bucket.tail = current; // update the tail to current node
        }
        // skip the node
        current.next = current.next.next;
        this.size--
        return true;
      }

      current = current.next;
    }
    
    return false;
  }
  length() {
    let result = 0;
    this.outputArray.forEach((bucket) => {
      if (bucket !== null) {
        let current = bucket.head;
        while (current !== null) {
          result += 1;
          current = current.next;
        }
      }
    });
    return result;
  }
  clear() {
    for (let i = 0; i < this.capacity; i++) {
      this.outputArray[i] = null;
    }
    this.size = 0
  }
  keys() {
    let allKeys = [];
    this.outputArray.forEach((bucket) => {
      if (bucket !== null) {
        let current = bucket.head;
        while (current !== null) {
          allKeys.push(current.key);
          current = current.next;
        }
      }
    });
    return allKeys;
  }

  values() {
    let allValues = [];
    let allKeys = this.keys();
    for (let i = 0; i < allKeys.length; i++) {
      allValues.push(this.get(allKeys[i]));
    }
    return allValues;
  }
  entries(){
    let result = []
    let allKeys = this.keys()
    allKeys.forEach(key=>{
      result.push([key,this.get(key)])
    })
    return result
  }
  resize(){
    this.capacity *=2
    const oldArray = this.outputArray
    this.outputArray = new Array(this.capacity).fill(null)
    this.size = 0
    oldArray.forEach(bucket=>{
      if(bucket!==null){
        let current = bucket.head
        while(current !== null){
          this.set(current.key, current.value)
          current = current.next
        }
      }
    })
  }
}
module.exports = HashMap;
