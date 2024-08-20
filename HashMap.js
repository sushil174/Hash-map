class HashMap {

    constructor(size = 16, loadFactor = 0.78) {
        this.size = size
        this.bucket = new Array(this.size);
        this.totalElement = 0
        this.loadFactor = loadFactor
    }

    hash(key) {
        let hashCode = 0;
        const primeNumber = 31;
        for(let i = 0; i < key.length; i++) {
            hashCode = primeNumber * hashCode + key.charCodeAt(i);
        }

        return hashCode % this.bucket.length
    }

    resize() {
        const size = this.bucket.length * 2;
        const newBucket = new Array(size);
        for(const ele of this.bucket) {
            const {index, value} = ele;
            const newIndex = this.hash(index);
            newBucket[newIndex] = value
        }
        this.bucket = newBucket
    }

    set(key, value) {
        const index = this.hash(key);
        if (index < 0 || index >= this.bucket.length) {
            throw new Error("Trying to access index out of bound");
        }
        else {
            this.bucket[index] = {key,value}
            this.totalElement += 1
        }
    }

    has(key) {
        const index = this.hash(key);
        if(this.bucket[index]) return true;
        else return false;
    }
    get(key) {
        const index = this.hash(key);
        if(this.bucket[index]) return this.bucket[index];
        else return null;
    }
    
    remove(key) {
        if(this.has(key)) {
            const index = this.hash(key);
            delete this.bucket[index];
            this.totalElement -= 1
            return true
        }
        else {
            return false
        }
    }

    length() {
        return this.totalElement
    }

    clear() {
        this.bucket = new Array(this.size)
    }

    keys() {
        let key = []
        this.bucket.forEach( element => {
            if(element) {
                key.push(element.key)
            }
        })

        return key
    }

    values() {
        let value = []
        this.bucket.forEach( element => {
            if(element) {
                value.push(element.value)
            }
        })
        return value
    }

    entries() {
        let list = []
        this.bucket.forEach( element => {
            if(element) {
                list.push(element)
            }
        })
        return list
    }

}


const test = new HashMap()
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

console.log(test.entries())
console.log(test.keys())
console.log(test.length())

test.set('moon', 'silver')

console.log(test.entries())
console.log(test.keys())
console.log(test.length())

test.set('apple','blue')
test.set('1','2')
test.set('3','5')
test.set('6','8')
test.set('90','80')

console.log(test.entries())
console.log(test.keys())
console.log(test.length())