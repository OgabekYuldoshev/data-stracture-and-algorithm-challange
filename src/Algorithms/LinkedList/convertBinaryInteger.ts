import { ListNode } from "@/DataStructures/LinkedList/ListNode";

// Leetcode: https://leetcode.com/problems/convert-binary-number-in-a-linked-list-to-integer/submissions/1206985856/
export const convertBinaryInteger = (head: ListNode | null): number => {
  if (head === null) return 0;
  let result: number = 0;

  while (head) {
    result = result * 2 + head.value;
    head = head.next;
  }
  return result;
};
