class HashTable {
  constructor(size) {
    this.table = new Array(size);
    this.size = size;
  }

  hash(key) {
    let index = 0;
    for (let i = 0; i < key.length; i++) {
      index += key.charCodeAt(i);
    }
    return index % this.size;
  }

  set(key, value) {
    const index = this.hash(key);
    const bucket = this.table[index];

    if (!bucket) {
      this.table[index] = [[key, value]];
    } else {
      const sameKeyItem = bucket.find(item => item[0] === key);
      if (sameKeyItem) {
        sameKeyItem[1] = value;
      } else {
        bucket.push([key, value]);
      }
    }
  }

  get(key) {
    const index = this.hash(key);
    const bucket = this.table[index];
    if (bucket) {
      const sameKeyItem = bucket.find(item => item[0] === key); // Changed from `k` to `key`
      if (sameKeyItem) {
        return sameKeyItem[1];
      }
      return undefined;
    }
  }

  remove(key) {
    const index = this.hash(key);
    const bucket = this.table[index];

    if (bucket) {
      const sameKeyItemIndex = bucket.findIndex(item => item[0] === key);
      if (sameKeyItemIndex !== -1) { 
        bucket.splice(sameKeyItemIndex, 1); 
      }
    }
  }

  display() {
    for (let i = 0; i < this.table.length; i++) {
      if (this.table[i]) {
        console.log(i, this.table[i]);
      }
    }
  }
}
debugger;
const hashTable = new HashTable(100);

hashTable.set("name", "John");
hashTable.set("age", 30);
hashTable.set("city", "New York");
hashTable.set("mane", "Jane"); // This will update the name
hashTable.set("name", "akshay");
hashTable.remove("name");

hashTable.display();
