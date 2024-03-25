import { ListNode } from "@/DataStructures/LinkedList/ListNode";

export const rotateList = (
  head: ListNode | null,
  k: number
): ListNode | null => {
  if (k === 0 || head === null || head.next === null) {
    return head;
  }

  let count = 1;
  let temp = head;

  while (temp.next) {
    count++;
    temp = temp.next;
  }

  k = k % count;

  let start = count - k;

  temp.next = head;

  while (start > 0) {
    temp = temp.next as any;
    start--;
  }

  head = temp.next;
  temp.next = null;
  return head;
};
