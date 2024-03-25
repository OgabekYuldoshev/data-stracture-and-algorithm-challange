import { ListNode } from "@/DataStructures/LinkedList/ListNode";

export function middleNode(head: ListNode | null): ListNode | null {
  if (!head) {
    return head;
  }

  let halfLength = Math.floor(getLength(head) / 2);

  let i = 0;
  let currentHead = head;

  while (halfLength === i && currentHead.next) {
    i++;
    currentHead = currentHead.next;
  }

  return currentHead;
}

function getLength(head: ListNode | null): number {
  let count = 0;

  while (head) {
    count += 1;
    head = head.next;
  }

  return count;
}
