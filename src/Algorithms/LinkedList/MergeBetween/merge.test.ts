import { LinkedList } from "@/DataStructures/LinkedList/LinkedList";
import { mergeBetween } from "./merge";

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
