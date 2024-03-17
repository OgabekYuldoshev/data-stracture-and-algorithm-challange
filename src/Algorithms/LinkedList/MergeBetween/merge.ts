import { ListNode } from "@/DataStructures/LinkedList/ListNode";

export type TMergeBetween = {
  list1: ListNode | null;
  list2: ListNode | null;
  start: number;
  end: number;
};
export const mergeBetween = ({
  list1,
  list2,
  start,
  end,
}: TMergeBetween): ListNode | null => {
  let index = 0;
  let currentNode = list1;
  let left = null;
  let right = null;

  while (currentNode) {
    index++;
    if (index === start) left = currentNode;
    if (index === end) right = currentNode.next?.next;

    currentNode = currentNode.next;
  }

  if (left) left.next = list2;

  if (right) {
    while (list2?.next) list2 = list2.next;

    if (list2) {
      list2.next = right;
    }
  }

  return list1;
};
