import { ListNode } from "@/DataStructures/LinkedList/ListNode";

// Leetcode: https://leetcode.com/problems/remove-duplicates-from-sorted-list/submissions/1206132997/

export const removeDublicates = (head: ListNode | null): ListNode | null => {
  if (!head) {
    return null;
  }
  let currentNode = head;
  while (currentNode.next) {
    if (currentNode.value === currentNode.next.value) {
      currentNode.next = currentNode.next.next;
    } else {
      currentNode = currentNode.next;
    }
  }
  return head;
};
