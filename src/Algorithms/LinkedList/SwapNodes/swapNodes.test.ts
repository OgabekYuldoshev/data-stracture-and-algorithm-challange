import { LinkedList } from "@/DataStructures/LinkedList/LinkedList";
import { swapNodesInPairs } from "./swapNodes";
test.skip("should swap nodes in pairs", () => {
  const list = new LinkedList();
  list.fillList([1, 2, 3, 4, 5, 6, 7, 8, 9]);
  const head = list.head();
  expect(swapNodesInPairs(head)?.value).toBe(2);
});
