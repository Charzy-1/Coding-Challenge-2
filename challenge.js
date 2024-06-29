class Node {
    constructor(value, next_node = null) {
        this.value = value;
        this.next_node = next_node;
    }
}

class LinkedList {
    constructor() {
        this.head = null; // Initialize the head as null
        this.tail = null; // Initialize the tail as null
    }

    add(number) {
        const newNode = new Node(number);
        if (this.head === null) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.tail.next_node = newNode;
            this.tail = newNode;
        }
    }

    get(index) {
        const node = this.get_node(index);
        return node ? node.value : null;
    }

    // Helper method to get the node at a specific index
    get_node(index) {
        let current = this.head;
        let count = 0;
        while (current !== null) {
            if (count === index) {
                return current;
            }
            count++;
            current = current.next_node;
        }
        return null; // If the index is out of bounds
    }

    add_at(index, item) {
        const newNode = new Node(item);

        if (index === 0) {
            // Insert at the head
            newNode.next_node = this.head;
            this.head = newNode;
            if (this.tail === null) {
                this.tail = newNode;
            }
        } else {
            const prevNode = this.get_node(index - 1);
            if (prevNode !== null) {
                newNode.next_node = prevNode.next_node;
                prevNode.next_node = newNode;
                if (newNode.next_node === null) {
                    this.tail = newNode;
                }
            } else {
                throw new Error("Index out of bounds");
            }
        }
    }

    remove(index) {
        if (index === 0) {
            if (this.head !== null) {
                this.head = this.head.next_node;
                if (this.head === null) {
                    this.tail = null;
                }
            } else {
                throw new Error("Index out of bounds");
            }
        } else {
            const prevNode = this.get_node(index - 1);
            if (prevNode !== null && prevNode.next_node !== null) {
                prevNode.next_node = prevNode.next_node.next_node;
                if (prevNode.next_node === null) {
                    this.tail = prevNode;
                }
            } else {
                throw new Error("Index out of bounds");
            }
        }
    }
}

const list = new LinkedList();
list.add(3);
list.add(5);
list.add_at(1, 11);
list.add_at(0, 13);
console.log(list.get(2)); // => 11
console.log(list.get(3)); // => 5
