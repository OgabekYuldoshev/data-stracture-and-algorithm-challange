import { ListNode } from "./ListNode";

export class LinkedList {
  #head: ListNode | null = null;
  #tail: ListNode | null = null;
  size: number = 0;
  constructor() {}

  // Append a node to the linked list.
  append(value: number) {
    const newNode = new ListNode(value);
    if (!this.#head) {
      this.#head = newNode;
      this.#tail = newNode;
    } else {
      if (this.#tail) {
        this.#tail.next = newNode;
        this.#tail = newNode;
      }
    }
    this.size++;
    return this;
  }

  // Prepend a node to the linked list.
  prepend(value: number) {
    const newNode = new ListNode(value);
    if (!this.#head) {
      this.#head = newNode;
      this.#tail = newNode;
    }
    newNode.next = this.#head;
    this.#head = newNode;
    this.size++;
    return this;
  }

  //Fill create linked list with array elements
  fillList(values: number[]) {
    values.forEach((value) => this.append(value));

    return this;
  }

  // Delete head node from linked list
  deleteHead() {
    if (this.#head) {
      if (this.#head === this.#tail) {
        this.#head = null;
        this.#tail = null;
      } else {
        let currentHead = this.#head;
        this.#head = currentHead.next;
      }
    }
    this.size--;
    return this;
  }

  // Delete tail node from linked list
  deleteTail() {
    if (this.#head === this.#tail) {
      this.#head = null;
      this.#tail = null;
    }
    let currentNode = this.#head;
    while (currentNode?.next) {
      if (!currentNode.next.next) {
        currentNode.next = null;
        this.#tail = currentNode;
        break;
      }
      currentNode = currentNode.next;
    }
    this.size--;
    return this;
  }

  // Delete node inside linked list
  delete(value: number) {
    if (!this.#head) {
      return null;
    }

    let currentNode = this.#head;
    while (currentNode.next) {
      if (currentNode.next.value === value) {
        currentNode.next = currentNode.next.next;
      } else {
        currentNode = currentNode.next;
      }
    }
    this.size--;
    return this;
  }

  // Find node inside linked list
  find(value: number) {
    if (!this.#head) {
      return null;
    }

    let currentNode = this.#head;
    while (true) {
      if (currentNode.value === value) {
        return currentNode;
      }
      if (!currentNode.next) return null;
      currentNode = currentNode.next;
    }
  }

  // Convert linked list to array
  toArray() {
    let arr = [];
    let currentNode = this.#head;
    while (currentNode) {
      arr.push(currentNode.value);
      currentNode = currentNode.next;
    }
    return arr;
  }
  // Reverse linked list
  reverse() {
    let currentNode: ListNode | null = this.#head;
    let previousNode = null;
    let nextNode = null;

    while (currentNode) {
      // Store next node.
      nextNode = currentNode.next;

      // Change next node of the current node so it would link to previous node.
      currentNode.next = previousNode;

      // Move prevNode and currNode nodes one step forward.
      previousNode = currentNode;
      currentNode = nextNode;
    }
    this.#tail = this.#head;
    this.#head = previousNode;

    return this;
  }

  // Insert node in linked list
  insert(value: number, index: number) {
    const i = index < 0 ? 0 : index;
    if (i === 0) {
      this.prepend(value);
    } else {
      let count = 1;
      const newNode = new ListNode(value);
      let currentNode = this.#head;
      while (currentNode) {
        if (count === i) break;
        currentNode = currentNode.next;
        count += 1;
      }
      if (currentNode) {
        newNode.next = currentNode.next;
        currentNode.next = newNode;
        this.size++;
      } else {
        if (this.#tail) {
          this.#tail.next = newNode;
          this.#tail = newNode;
        } else {
          this.#head = newNode;
          this.#tail = newNode;
        }
      }
    }

    return this;
  }

  // Get head of linked list
  head() {
    return this.#head;
  }

  // Get tail of Linked list
  tail() {
    return this.#tail;
  }
}
