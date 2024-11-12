import Node from "./node.js";

export default class LinkedList {
    constructor(head = null) {
        this.head = head;
    };

    append(value) {
        let newNode = new Node(value, null);
        
        if (this.head == null) {
            this.head = newNode;
            return;
        }

        let current = this.head;
        while (current.nextNode != null) {
            current = current.nextNode;
        }

        current.nextNode = newNode;
    }

    prepend(value) {
        let newNode = new Node(value, this.head);
        this.head = newNode;
    }

    size() {
        let count = 0;
        let data = this.head;
        while (data != null) {
            data = data.nextNode;
            count++;
        }

        return count;
    }

    head() {
        return this.head;
    }

    tail() {
        if (this.head == null) {
            return this.head;
        }

        let last = this.head;
        while (last.nextNode != null) {
            last = last.nextNode;
        }

        return last;
    }

    at(index) {
        if (this.head == null) {
            return null;
        }

        if (this.size() < index - 1) {
            return null;
        }

        let i = 0;
        let result = this.head;
        while (i < index) {
            result = result.nextNode;
            i++;
        }

        return result.value;
    }

    toString() {
        let str = '';
        let current = this.head;
        while (current != null) {
            str +=`(${current.value}) -> `;
            current = current.nextNode;
        }

        str += null;
        console.log(str);
    }
}