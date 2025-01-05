# HashMap Implementation in JavaScript

This repository contains an implementation of a HashMap data structure in JavaScript. The implementation uses a custom `LinkedList` class to handle collisions through chaining. The `HashMap` dynamically resizes when the load factor exceeds a specified threshold.

---

## Features

- **Hashing**: Generates a hash code using a simple algorithm to map keys to indices in the internal array.
- **Collision Handling**: Uses separate chaining with linked lists to manage collisions.
- **Dynamic Resizing**: Automatically resizes the internal array when the load factor exceeds a threshold (`0.75` by default).
- **CRUD Operations**:
  - `set(key, value)`: Add or update key-value pairs.
  - `get(key)`: Retrieve the value associated with a key.
  - `remove(key)`: Remove a key-value pair.
- **Utility Methods**:
  - `keys()`: Retrieve all keys in the hash map.
  - `values()`: Retrieve all values in the hash map.
  - `entries()`: Retrieve all key-value pairs as arrays.
  - `clear()`: Clear all elements in the hash map.
  - `length()`: Get the total number of elements.
  - `has(key)`: Check if a key exists.

---

## Classes

### 1. **HashMap**

#### Properties
- `size`: Tracks the number of key-value pairs in the hash map.
- `loadFactorThreshold`: Determines the maximum load factor before resizing (`0.75` by default).
- `capacity`: The current capacity of the internal array (default is `16`).
- `outputArray`: The internal array used for storing linked lists of key-value pairs.

#### Methods

##### `hash(key)`
Generates a hash code for a given string `key`.
- **Input**: A string `key`.
- **Output**: An integer index for the internal array.

##### `set(key, value)`
Adds or updates a key-value pair in the hash map.
- **Input**: 
  - `key`: The key of the element.
  - `value`: The value to store.
- **Behavior**: 
  - If the key exists, updates the value.
  - If the load factor exceeds the threshold, triggers resizing.

##### `get(key)`
Retrieves the value associated with a given `key`.
- **Input**: A string `key`.
- **Output**: The value if the key exists, `undefined` otherwise.

##### `has(key)`
Checks if the hash map contains a specific `key`.
- **Input**: A string `key`.
- **Output**: `true` if the key exists, `false` otherwise.

##### `remove(key)`
Removes a key-value pair from the hash map.
- **Input**: A string `key`.
- **Output**: `true` if the key was removed, `false` otherwise.

##### `keys()`
Returns all keys in the hash map.
- **Output**: An array of keys.

##### `values()`
Returns all values in the hash map.
- **Output**: An array of values.

##### `entries()`
Returns all key-value pairs as arrays.
- **Output**: An array of `[key, value]` pairs.

##### `clear()`
Clears all elements in the hash map.

##### `resize()`
Doubles the capacity of the internal array and rehashes all existing elements.

##### `length()`
Calculates the total number of elements in the hash map.
- **Output**: An integer representing the total number of key-value pairs.

---

### 2. **LinkedList**

#### Properties
- `head`: Points to the first node of the linked list.
- `tail`: Points to the last node of the linked list.
- `size`: Tracks the number of nodes in the linked list.

#### Methods

##### `append(key, value)`
Adds a new node with the given `key` and `value` at the end of the linked list.
- **Input**:
  - `key`: The key of the node.
  - `value`: The value to store.
- **Behavior**:
  - If the list is empty, the new node becomes the `head` and `tail`.
  - Otherwise, it appends the node to the end and updates the `tail`.

##### `toString()`
Converts the linked list to a string representation.
- **Output**: A string of keys in the format: `key1->key2->...`.

---

### 3. **Node**

#### Properties
- `key`: The key of the node.
- `value`: The value of the node.
- `next`: Points to the next node in the linked list (default is `null`).

---

## Example Usage

```javascript
const HashMap = require("./HashMap");

const hashMap = new HashMap();

// Adding key-value pairs
hashMap.set("key1", "value1");
hashMap.set("key2", "value2");
hashMap.set("key3", "value3");

// Retrieving values
console.log(hashMap.get("key1")); // Output: "value1"

// Checking if a key exists
console.log(hashMap.has("key2")); // Output: true

// Removing a key
hashMap.remove("key3");
console.log(hashMap.get("key3")); // Output: undefined

// Getting all keys
console.log(hashMap.keys()); // Output: ["key1", "key2"]

// Clearing the hash map
hashMap.clear();
console.log(hashMap.length()); // Output: 0