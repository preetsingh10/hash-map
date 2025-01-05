const HashMap = require("./hashmap");

const test = new HashMap() // or HashMap() if using a factory
test.set('apple', 'red')
test.set('banana', 'yellow')
test.set('carrot', 'orange')
test.set('dog', 'brown')
test.set('elephant', 'gray')
test.set('frog', 'green')
test.set('grape', 'purple')
test.set('hat', 'black')
test.set('ice cream', 'white')
test.set('jacket', 'blue')
test.set('kite', 'pink')
test.set('lion', 'golden')
test.set('love', 'golden')
for(let i=0; i<20000; i++){
    test.set(`${i}`, `value: ${i}`)
}

console.log(test.length())
console.log(test.entries())
console.log("Size:", test.size); 
console.log("Capacity:", test.capacity); // Should be 32 (16 * 2)
console.log(test.get('love'))
