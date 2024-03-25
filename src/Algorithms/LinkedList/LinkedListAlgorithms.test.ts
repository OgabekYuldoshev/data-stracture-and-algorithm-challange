import { LinkedList } from "@/DataStructures/LinkedList/LinkedList";
import { swapNodesInPairs } from "./swapNodes";
import { reverse } from "./reverse";
import { removeDublicates } from "./remove";
import { mergeBetween } from "./merge";
import { sort } from "./sort";
import { convertBinaryInteger } from "./convertBinaryInteger";
import { reverseBetween } from "./reverseBetween";
import { rotateList } from "./rotate";
import { middleNode } from "./middle";

test("should swap nodes in pairs", () => {
  const list = new LinkedList();
  list.fillList([1, 2, 3, 4, 5, 6, 7, 8, 9]);
  const head = list.head();
  expect(swapNodesInPairs(head)?.value).toBe(2);
});

test("should reverse linked list", () => {
  const list = new LinkedList().fillList([1, 2, 3]).head();
  expect(reverse(list)?.value).toBe(3);
});

test("should remove dublicates from linked list", () => {
  const list = new LinkedList().fillList([1, 1, 2, 2, 2, 3]).head();
  const value = removeDublicates(list);
  expect(value).toEqual({
    value: 1,
    next: { value: 2, next: { value: 3, next: null } },
  });
});

test("should merge 2 linked list by index", () => {
  const list1 = new LinkedList().fillList([1, 2, 3, 4, 5, 6, 7, 8, 9]).head();
  const list2 = new LinkedList().fillList([100, 200, 300]).head();
  const testList = mergeBetween({
    list1,
    list2,
    start: 2,
    end: 3,
  });

  expect(JSON.stringify(testList)).toMatch(/100/);
});

test("should sort linked list", () => {
  const list = new LinkedList().fillList([4, 3, 2, 1]).head();
  expect(sort(list)?.value).toBe(1);
});

test("should convert binary code from linked list", () => {
  const list = new LinkedList().fillList([1, 0, 1]).head();
  expect(convertBinaryInteger(list)).toBe(5);
});

// test("should reverse between linked list", () => {
//   const list = new LinkedList().fillList([1, 2, 3, 4, 5, 6, 7, 8, 9]).head();
//   expect(reverseBetween(list, 1, 3)?.value).toBe(3);
// });

test("should roatete linked list", () => {
  const list = new LinkedList().fillList([1, 2, 3, 7]).head();
  console.log(JSON.stringify(rotateList(list, 5), null, 2));
  // expect(rotateList(list, 2)?.value).toBe(2);
});

test("should middle node", () => {
  const list = new LinkedList().fillList([1, 2, 3, 4, 5, 6]).head();
  console.log(JSON.stringify(middleNode(list), null, 2));
  // expect(rotateList(list, 2)?.value).toBe(2);
});
