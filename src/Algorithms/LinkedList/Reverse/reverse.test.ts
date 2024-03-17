import { LinkedList } from "@/DataStructures/LinkedList/LinkedList";
import { reverse } from "./reverse";

test("should reverse linked list", () => {
  const list = new LinkedList().fillList([1, 2, 3]).head();
  expect(reverse(list)?.value).toBe(3);
});
