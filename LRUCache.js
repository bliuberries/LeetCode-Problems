/**
 * @param {number} capacity
 */
var LRUCache = function(capacity) {
  this.size = capacity;
  this.count = 0;
  this.head = null;
  this.tail = null;
  this.cache = {};
};

/** 
* @param {number} key
* @return {number}
*/
LRUCache.prototype.get = function(key) {
  if(this.cache[key]) {
    const { value } = this.cache[key];
    const { prev, next } = this.cache[key];
    if (prev) prev.next = next;
    if (next) next.prev = prev || next.prev;
    if (this.tail === this.cache[key]) this.tail = prev || this.cache[key];
    this.cache[key].prev = null;
    if(this.head !== this.cache[key]) {
      this.cache[key].next = this.head;
      this.head.prev = this.cache[key];
    }

    this.head = this.cache[key];

    return value;
  }
  return -1;
};

/** 
* @param {number} key 
* @param {number} value
* @return {void}
*/
LRUCache.prototype.put = function(key, value) {
  if(this.cache[key]) {
    this.cache[key].value = value;
    this.get(key);
  } else {
    this.cache[key] = { key, value, prev: null, next: null};
    if(this.head) {
      this.head.prev = this.cache[key];
      this.cache[key].next = this.head;
    }

    this.head = this.cache[key];

    if(!this.tail) {
      this.tail = this.cache[key];
    }

    this.count +=1;
  }

  if(this.count > this.size) {
    let removedKey = this.tail.key;

    if(this.tail.prev) {
      this.tail.prev.next = null;
      this.tail = this.tail.prev;
      this.cache[removedKey].prev = null;
    }
    
    delete this.cache[removedKey];

    this.counter -= 1;
  }
};

/** 
* Your LRUCache object will be instantiated and called as such:
* var obj = new LRUCache(capacity)
* var param_1 = obj.get(key)
* obj.put(key,value)
*/
let cache = new LRUCache(2);


cache.put(1, 1);
cache.put(2, 2);
console.log(cache.get(1));       // returns 1
cache.put(3, 3);    // evicts key 2
console.log(cache.get(2));      // returns -1 (not found)
cache.put(4, 4);    // evicts key 1
console.log(cache.get(1));     // returns -1 (not found)
console.log(cache.get(3));;      // returns 3
console.log(cache.get(4));       // returns 4