import { ListNode } from "@/DataStructures/LinkedList/ListNode";

export const sort = (head: ListNode | null): ListNode | null => {
  if (!head) {
    return head;
  }
  let currentNode = head;

  while (currentNode.next) {
    let nextNode: ListNode | null = currentNode.next;

    while (nextNode) {
      if (currentNode.value > nextNode.value) {
        let temp = currentNode.value;
        currentNode.value = nextNode.value;
        nextNode.value = temp;
      }
      nextNode = nextNode.next;
    }
    currentNode = currentNode.next;
  }

  return head;
};
