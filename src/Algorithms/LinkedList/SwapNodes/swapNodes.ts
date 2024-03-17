import { ListNode } from "@/DataStructures/LinkedList/ListNode";

export const swapNodesInPairs = (head: ListNode | null): ListNode | null => {
  let currentNode = head;

  while (currentNode?.next) {
    const value = currentNode.value;
    currentNode.value = currentNode.next.value;
    currentNode.next.value = value;
    currentNode = currentNode.next.next;
  }

  return head;
};
