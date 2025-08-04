// Creating Hash Table...

class HashTable {
    constructor(size = 7) {
        this.dataMap = Array.from({ length: size });
    }
    #hash(key) {
        let hash = 0;
        for (let i = 0; i < key.length; i++) {
            hash += key.charCodeAt(i) * 11;
            return hash % this.size();
        }
    }
    set(key, value) {
        const hash = this.#hash(key);
        if (!this.dataMap[hash]) this.dataMap = [];
        console.log("map", this.#hash(key));
        //this.dataMap[hash].push({ key, value });
    }
    size() {
        return this.dataMap.length;
    }
}

const table = new HashTable();
console.log(table.dataMap);
console.log(table.set("GHS-PROJECT", 12));
