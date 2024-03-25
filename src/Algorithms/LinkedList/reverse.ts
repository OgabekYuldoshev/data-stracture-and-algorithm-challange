import { ListNode } from "@/DataStructures/LinkedList/ListNode";
// LeetCode: https://leetcode.com/problems/reverse-linked-list/submissions/1206147029/
export const reverse = (head: ListNode | null): ListNode | null => {
  if (!head) return null;
  let currentNode: ListNode | null = head;
  let prevNode = null;
  let nextNode = null;

  while (currentNode) {
    nextNode = currentNode.next;
    currentNode.next = prevNode;
    prevNode = currentNode;
    currentNode = nextNode;
  }

  return prevNode;
};
