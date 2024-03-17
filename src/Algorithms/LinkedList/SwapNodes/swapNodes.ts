import { ListNode } from "@/DataStructures/LinkedList/ListNode";

// LeetCode: https://leetcode.com/problems/swap-nodes-in-pairs/submissions/1206136045/
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
