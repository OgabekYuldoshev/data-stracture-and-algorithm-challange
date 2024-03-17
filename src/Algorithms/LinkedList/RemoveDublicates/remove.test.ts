import { LinkedList } from "@/DataStructures/LinkedList/LinkedList";
import { removeDublicates } from "./remove";

test("should remove dublicates from linked list", () => {
  const list = new LinkedList().fillList([1, 1, 2, 2, 2, 3]).head();
  const value = removeDublicates(list);
  expect(value).toEqual({
    value: 1,
    next: { value: 2, next: { value: 3, next: null } },
  });
});
