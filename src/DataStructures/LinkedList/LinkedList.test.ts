import { LinkedList } from "./LinkedList";

describe.skip("LinkedList data structure testing", () => {
  const list = new LinkedList();

  test("should append new listnode in LinkedList", () => {
    list.append(5);
    expect(list.size).toBe(1);
  });

  test("should prepend new listnode in LinkedList", () => {
    list.prepend(3);
    expect(list.size).toBe(2);
  });

  test("should fill LinkedList from array", () => {
    list.fillList([8, 7, 6, 5, 4, 3, 2]);
    expect(list.size).toBe(9);
  });

  test("should get head of linked list", () => {
    const head = list.head();
    expect(head?.value).toBe(3);
  });

  test("should get tail of linked list", () => {
    const tail = list.tail();
    expect(tail?.value).toBe(2);
  });

  test("should delete head of LinkedList", () => {
    list.deleteHead();
    expect(list.head()?.value).toBe(5);
  });

  test("should delete head of LinkedList", () => {
    list.deleteTail();
    expect(list.tail()?.value).toBe(3);
  });

  test("should find node in linked list", () => {
    expect(list.find(11)).toBeNull();
    expect(list.find(5)).toBeTruthy();
    expect(list.find(4)?.value).toBe(4);
  });

  test("should convert linked list to array", () => {
    expect(list.toArray()).toEqual([5, 8, 7, 6, 5, 4, 3]);
  });

  test("should delete node in linked list", () => {
    list.delete(6);
    expect(list.find(6)).toBeNull();
  });

  test("should reverse node in linked list", () => {
    list.reverse();
    expect(list.head()?.value).toBe(3);
  });

  test("should insert node with index in linked list", () => {
    list.insert(11, 4);
    expect(list.find(11)?.value).toBe(11);
  });
});
