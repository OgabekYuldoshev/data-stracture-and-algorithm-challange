import { ListNode } from "@/DataStructures/LinkedList/ListNode";

export const reverseBetween = (
  head: ListNode | null,
  left: number,
  right: number
): ListNode | null => {
  if (!head) {
    return head;
  }
  let size = 0;

  while (head) {
    size += 1;
    head = head.next;
  }

  console.log(size);

  return head;
};
