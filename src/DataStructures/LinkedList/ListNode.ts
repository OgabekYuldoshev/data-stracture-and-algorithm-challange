export class ListNode {
  value: number;
  next: ListNode | null = null;

  constructor(val: number, next: ListNode | null = null) {
    this.value = val;
    this.next = next;
  }
}
